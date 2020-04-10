import React, { useContext } from 'react'
import { Preferences } from './aboutprofile/preferences'
import { Interest } from './aboutprofile/interest'
import { Match } from './aboutprofile/match'
import { MsgContext } from '../../context/MsgContext'


const showMsgPanel = {
    display: 'block'
}

const hideMsgPanel = {
    display: 'none'
}

export const AboutCat = () => {

    const { msgPanel } = useContext(MsgContext)

    return (
        <div style={ msgPanel ? showMsgPanel: hideMsgPanel } className="about-cat">
            <Interest />
            <Preferences />
            <Match />
        </div>
    )
}
