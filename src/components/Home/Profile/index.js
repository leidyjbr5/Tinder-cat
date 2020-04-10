import React, { useContext } from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'
import { ProfileContext } from '../../context/ProfileContext'


const showProfilePanel = {
    display: 'block'
}

const hideProfilePanel = {
    display: 'none'
}

export const Profile = () => {

    const { profilePanel } = useContext(ProfileContext)
    return(
        <div style={ profilePanel ? showProfilePanel: hideProfilePanel } className='profile'>
            <Avatar />
            <Bio />
            <Menu />
        </div>
    )
}