import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import IndexRoute from './Route/IndexRoute'


const app = express()

// parse body params and attach them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// use helmet spy bisa dikenali SEO
app.use(helmet())

// secure apps by setting various HTTP headers
app.use(compress())

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use("/dans-multipro/", (req, res) => {
    res.send("dans multipro test")
});

//api routes
app.use('/api/jobs', IndexRoute.JobRoute)
app.use('/api/auth', IndexRoute.AuthRoute)

// Client Side Import
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import devBundle from './devBundle'
import MainRouter from './../client/MainRouter'
import Template from './../template'
import store from '../client/store.js'

/* comment script dibawah before building for production
client-side : gunakan ketika development only */

devBundle.compile(app)
app.get('*', (req, res) => {
    const context = {}
    const markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <MainRouter />
        </StaticRouter>
      </Provider>
    );
    if (context.url) {
      return res.redirect(303, context.url)
    }
  
    res.status(200).send(Template())
  });

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})

export default app