import React from 'react'
import { ReactionIcon } from './Reactions-icon'

export const Reactions = () => (
    <div className='reactions'>
        <ReactionIcon name='heart-dislike' />
        <ReactionIcon color='#ccc' name ='heart' />
    </div>
)