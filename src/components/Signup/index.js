import React from 'react'
import Logo from '../../static/logo-login.png'
import { Link } from 'react-router-dom'

export const Signup = () => (
    <div className="signup">
        <form>
                <img src={Logo} />

                <div className="input-register">
                    <label>Name</label>
                    <input type="nombre"  />
                </div>

                <div className="input-register">
                    <label>Nickname</label>
                    <input type="nickname"  />
                </div>

                <div className="input-register">
                    <label>Gender</label>
                    <input type="gender"  />
                </div>

                <div className="input-register">
                    <label>Bio</label>
                    <input type="texto"  />
                </div>
                
                <div className="input-register">
                    <label>Email address</label>
                    <input type="email"  />
                </div>

                <div className="input-register">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div className="input-register">
                    <label>Birthday</label>
                    <input type="date"  />
                </div>

                <br />
                <Link to='/login'>
                    <div className='button-primary'>
                        <input type='button' value='Register' />
                    </div>
                </Link>
                <br />    
        </form>
    </div>
)