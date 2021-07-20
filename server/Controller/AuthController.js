import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import authSecret from '../../config/config-secret'
import Config from '../../config/config'

const login = async (req, res) => {
    const { id, password } = req.body
    const { _id, _password } = authSecret
    //console.log(id, _id, password, _password)
    if (id === _id && password === _password) {
        const token = jwt.sign({ _id: _id }, Config.jwtSecret)
        res.cookie('token', token, { expire: new Date() + 9999 })
        return res.json(
            { token, users: {
                id: _id
        }})
    }
    else {
        return res.status(400).send('Login Failure')
    }
}

const logout = (req, res) => {
    res.clearCookie('token' , { path: '/' })
    return res.status(200).send('Signed Out')
}

const requireLogin = expressJwt({
    secret: Config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['sha1', 'RS256', 'HS256']
})

export default {
    login,
    logout,
    requireLogin
}