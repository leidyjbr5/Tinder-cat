import React, { useState } from 'react'
import Logo from '../../static/logo-login.png'
import {
    Link
} from 'react-router-dom'

export const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const loginHandler = () => {
        console.log('email', email)
        console.log('password', password)
    }

    return (
        <div className="login">
            <form>
                <img src={Logo} />
                <div className="input-custom">
                    <label>Email address</label>
                    <input value={ email } onChange={ (e) => setEmail(e.target.value) } type="email" />
                </div>
                <div className="input-custom">
                    <label>Password</label>
                    <input value={ password } onChange={ (e) => setPassword(e.target.value) } type="password" />
                </div>
                <br />
                <div className="button-primary">
                    <input onClick={ loginHandler } type="button" value="Login" />
                </div>
                <br />
                <p className="signup-link">
                    ¿Not member yet?
                    <Link to="/signup">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}