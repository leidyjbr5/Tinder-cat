import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => (
    <nav className='menu'>
        <ul>
            <a href='#'>
                <li>
                    <ion-icon name="logo-octocat"></ion-icon>
                    <p>Home</p>
                </li>
            </a>
            <a href='#'>
                 <li>
                    <ion-icon name="heart"></ion-icon>
                    <p>Matches</p>
                </li>
            </a>         
            <a href='#'>
                <li>
                    <ion-icon name="help-circle"></ion-icon>
                    <p>Ayuda</p>
                </li>
            </a>
            <a href='#'>
                <li>
                    <ion-icon name="log-out"></ion-icon>
                    <p><Link to='/login'>
                        Cerrar Sesión
                    </Link>
                    </p>
                </li>
            </a>
        </ul>
    </nav>
    
)