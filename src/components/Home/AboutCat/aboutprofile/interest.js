import React from 'react'
import { InterestOne } from './InterestOne'
import { INTERESTS } from '../../../../data/db'

export const Interest = () => {

    return(
        <div className='interest-container'>
            <p> Tus Intereses </p>
                <hr/>
                <div className='interest-box'>
                    {
                        INTERESTS.map( (item, key)  => <InterestOne key={ key } name={ item.name } status={ item.status } />)
                    }

                </div>
        </div>
    )
}