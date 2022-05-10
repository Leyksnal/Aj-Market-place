import React, { useState, createContext} from 'react'


export const CountState = createContext()

export const GlobalState = ({children})=>{

    const [num, setnum] = useState(0)

    const addCount =()=>{
        setnum(num + 1)
    }
    const subCount =()=>{
        setnum(num - 1)
    }

    return (
        <CountState.Provider value={{num, addCount, subCount}}>
            {children}
        </CountState.Provider>
    )
}