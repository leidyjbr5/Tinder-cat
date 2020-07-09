import React, { useContext } from 'react'
import { ReactionIcon } from './Reactions-icon'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
import { CatContext } from '../../../context/CatContext'


export const Reactions = () => { 

    const {catInteraction, setCatInteraction,setReloadCats} = useContext(CatContext)
    console.log(catInteraction)

    const likedCat = async() => {
        try{
            const endpoint = HTTP_CONSTANTS.liked
            const data = {catIdLiked:catInteraction}
            const response = await requestHttp('post',endpoint,data)
            console.log(response)
            setReloadCats(true)
        }catch(err){
            console.error(err)
        }

    }

    const unlikedCat = async() => {
        try{
            const endpoint = HTTP_CONSTANTS.unliked
            const data = {catIdUnliked:catInteraction}
            const response = await  requestHttp('post',endpoint,data)
            setReloadCats(true)
            console.log(response)
        }catch(err){
            console.error(err)
        }

    }

    return( 

    <div className='reactions'>
        <ReactionIcon name='heart-dislike' onPress={unlikedCat} />
        <ReactionIcon color='#ccc' name ='heart' onPress={likedCat} />
    </div>
    )

}