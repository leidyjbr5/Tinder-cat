import React, { useContext } from 'react'
import Logo from '../../../../static/logo-color.svg'
import { TopbarIcon } from './Topbar-icon'
import { ProfileContext } from '../../../context/ProfileContext'
import { MsgContext } from '../../../context/MsgContext'


const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => {

    const { profilePanel, setProfilePanel }= useContext(ProfileContext)

    const profilePanelHandler = () => {
        //console.log('click!')
        setProfilePanel(!profilePanel)
    };

    const { msgPanel, setMsgPanel }= useContext(MsgContext)

    const msgPanelHandler = () => {
        //console.log('click!')
        setMsgPanel(!msgPanel)
    };

    return (
        <div className="topbar">
            <div className="show-mobile">
                <TopbarIcon onPress={ profilePanelHandler } name="menu-sharp" />
            </div>
            <div style={ logoStyle }>
                <img width="200" src={ Logo } />
            </div>
            <TopbarIcon badge="6" name="notifications" />
            <TopbarIcon onPress={ msgPanelHandler } name="create" />
        </div>
    )
}