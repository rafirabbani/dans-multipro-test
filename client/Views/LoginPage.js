import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AuthAction from '../Actions/AuthAction'
import bgImage from '../Assets/Images/bg-image.jpg'


export default function SignIn() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [warningEmail, setWarningEmail] = useState(false)
    const [warningPassword, setWarningPassword] = useState(false)
    const [values, setValues] = useState([])
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/home')
        }
    }, [auth])

    useEffect(() => {
        if (auth.error) {
            alert(`Login Failed`)
        }
    }, [auth])

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
        if (name === 'id') {
            setWarningEmail(false)
        }
        else if (name === 'password') {
            setWarningPassword(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (values.id && values.password) {
            dispatch(AuthAction.login(values))
        }
        else if (!values.id && values.password) {
            setWarningEmail(true)
        }
        else if(!values.password && values.id) {
            setWarningPassword(true)
        }
        else {
            setWarningEmail(true)
            setWarningPassword(true)
        }
    }

    return (
        <div>
            
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="absolute bg-black inset-0 z-0 opacity-0"></div>
                <div className="w-full px-10 z-10">
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{backgroundColor: `#161616`}}>
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)`}}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <form method="post" action="#" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"> 
                        <div className="pb-2 pt-4">
                            <input type="email" name="id" id="id" placeholder="ID" className="block w-full p-4 text-lg rounded-sm bg-black focus:border-red-600 focus:ring-0"
                            onChange={handleChange('id')}/>
                            <label className='text-sm text-yellow-400 mt-1' style={{ visibility: (!warningEmail ? 'hidden' : 'visible') }}>ID Required!!!</label>
                        </div>
                        <div className="pb-2 pt-4">
                            <input className="block w-full p-4 text-lg rounded-sm bg-black focus:border-red-600 focus:ring-0" type="password" name="password" id="password" placeholder="Password"
                            onChange={handleChange('password')}/>
                            <label className='text-sm text-yellow-400 mt-1' style={{ visibility: (!warningPassword ? 'hidden' : 'visible') }}>Password Required!!!</label>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button className="uppercase block w-full p-4 text-lg text-black rounded-full bg-white hover:bg-gray-300 focus:outline-none"
                            onClick={onSubmit}>sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    )
}