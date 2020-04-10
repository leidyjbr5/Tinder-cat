import React, { createContext, useState, useEffect } from 'react'

const initialState = false

export const MsgContext = createContext (initialState)

export const MsgContextStore = ({ children }) => {

    const [ msgPanel, setMsgPanel ] = useState(initialState)

    useEffect( () => {
        const showState = window.innerWidth > 768 //true si se cumple > 768
        setMsgPanel(showState)
    }, [])

    return (
        <MsgContext.Provider value={{ msgPanel, setMsgPanel }}>
            { children }
        </MsgContext.Provider>
    )
}

