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

// #middleware


//api routes
app.use('/api/jobs', IndexRoute.JobRoute)
app.use('/api/auth', IndexRoute.AuthRoute)


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