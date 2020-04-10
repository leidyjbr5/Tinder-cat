import React from 'react';
import { Routers } from './components/Routers';
import { MsgContext } from './components/context/MsgContext';

export const App = () => (
    <MsgContext.Provider value={ 'Hola a todos!' }>
        <Routers />
    </MsgContext.Provider>
)
