import React, { useState, useEffect } from 'react'
import { Couple } from './Couple'
import { NavigationIcon } from './Navigation-icon'
import { CAT_LIST } from '../../../../data/db'

export const Navigation = () => {

    const [ indexCat, setIndexCat ] = useState(0)
    const [ cat, setCat ] = useState({})

    const goBack = () => {
        console.log('go back...')
        let newIndex = indexCat == 0 ? CAT_LIST.length - 1 : indexCat - 1
        setIndexCat( newIndex )
        setCat(CAT_LIST[indexCat])
    }

    const goNext = () => {
        console.log('go next...')
        let newIndex = indexCat == CAT_LIST.length - 1 ? 0 : indexCat + 1 
        setIndexCat( newIndex )
        setCat(CAT_LIST[indexCat])
    }

    useEffect ( () => {
        setCat(CAT_LIST[indexCat])
    }, [indexCat])

    return (
        <div className="navigation">
            <NavigationIcon onPress={ goBack } name="arrow-undo" />
            <Couple
                image={ cat.image }
                username={ cat.username }
                description={ cat.description }
            />
            <NavigationIcon onPress={ goNext } name="arrow-redo" />
        </div>
    )
}

    
