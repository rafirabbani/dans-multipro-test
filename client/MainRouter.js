import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Page
import LoginPage from './Views/LoginPage'
import HomePage from './Views/HomePage'

const MainRouter = () => {

    //Get Auth State
    const auth = typeof window !== "undefined" && useSelector((state) => state.auth)
      
    //Login Checker Function
    const isLogin = (Component) => {
        if (auth.isLoggedIn) {
            return <Component />
        }
        else {
        return <Redirect to="/login"/>
        }
    }

    return (
      <>
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/home" render={()=> typeof window != 'undefined' && isLogin(HomePage)} />
        </Switch>
      </>
    )
}

export default MainRouter