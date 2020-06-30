import React, { useContext, useEffect, useState } from 'react'
import { Preferences } from './aboutprofile/preferences'
import { Interest } from './aboutprofile/interest'
import { Match } from './aboutprofile/match'
import { MsgContext } from '../../context/MsgContext'
import { PreferencesAge } from './aboutprofile/PreferencesAge'
import { HTTP_CONSTANTS } from '../../../config/http-constants'


const showMsgPanel = {
    display: 'block'
}

const hideMsgPanel = {
    display: 'none'
}

export const AboutCat = ({ preferences, interest }) => {

    const { msgPanel } = useContext(MsgContext)
    const [ preferencesUpdated, setPreferencesUpdated ] = useState(preferences)

    const prefChangedHandler = (newGender) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: newGender
        }))
    }

    const prefAgesChangedHandler = (min, max) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))
    }

    useEffect(() => {
        if (JSON.stringify(preferences) !== JSON.stringify(preferencesUpdated)) {
            requestChangePreferences()
        }
    }, [preferencesUpdated])

    const requestChangePreferences = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }
            const response = await requestHttp('put', endpoint, bodyData)
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    return (
        <div style={ msgPanel ? showMsgPanel: hideMsgPanel } className="about-cat">
            <Preferences onChange={ prefChangedHandler } gender={ preferences.gender } />
            <PreferencesAge notifyChange={ prefAgesChangedHandler } ageMax={ preferences.age_max } ageMin={ preferences.age_min } />
            <Interest interestCat={ interest }/>
            <Match />
        </div>
    )
}
