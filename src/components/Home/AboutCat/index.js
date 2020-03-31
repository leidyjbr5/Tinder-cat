import React from 'react'
import { Preferences } from './aboutprofile/preferences'
import { Interest } from './aboutprofile/interest'
import { Match } from './aboutprofile/match'


export const AboutCat = () => (
    <div className='about-cat'>
        <Preferences />
        <Interest />
        <Match />
    </div>
)