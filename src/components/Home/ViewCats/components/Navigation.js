import React, { useState, useEffect } from 'react'
import { Couple } from './Couple'
import { NavigationIcon } from './Navigation-icon'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
//import { CAT_LIST } from '../../../../data/db'

export const Navigation = () => {

    const[ catList, setCatList] = useState([])
    const[cat, setCat] = useState({})
    const [ indexCat, setIndexCat ] = useState(-1)
    const [ loading, setLoading ] = useState(true)

    const getCatList = async () => {
        try {
          const endpoint = HTTP_CONSTANTS.catList
          const response = await requestHttp('get', endpoint)
          const { catsAvailable } = response
          setCatList(catsAvailable)
          setIndexCat(0)
          
        } catch (err) {
          console.log(err)
        }
      }

    const goBack = () => {
        console.log('go back...')
        let newIndex = indexCat == 0 ? catList.length - 1 : indexCat - 1
        setIndexCat( newIndex )
        //setCat(CAT_LIST[indexCat])
    }

    const goNext = () => {
        console.log('go next...')
        let newIndex = indexCat == catList.length - 1 ? 0 : indexCat + 1 
        setIndexCat( newIndex )
        //setCat(CAT_LIST[indexCat])
    }

    useEffect ( () => {
        if (catList.length > 0) {
            setCat(catList[indexCat])
            setLoading(false)
    }

    return () => {
    } //Saneamiento
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

    
