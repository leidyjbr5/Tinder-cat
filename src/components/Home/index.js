import React from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { MsgContextStore } from '../context/MsgContext'
import { ProfileContextStore } from '../context/ProfileContext'



export const Home = () => (
    <div className="home-page">
        <ProfileContextStore>
        <MsgContextStore>
            <Profile />
            <ViewCats />
            <AboutCat />
        </MsgContextStore>
        </ProfileContextStore>
    </div>
)