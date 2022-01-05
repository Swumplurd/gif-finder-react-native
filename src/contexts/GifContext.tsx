import React, { createContext, useReducer } from "react"
import { gifReducer } from "./gifReducer"

export interface GifState {
    nameGif: string
}

export const gifInitialState: GifState = {
    nameGif: ''
}

export interface GifContextProps {
    gifState: GifState
    setGifName: (search: string) => void
}

export const GifContext = createContext({} as GifContextProps)


export const GifProvider = ({children}: {children: JSX.Element[] | JSX.Element}) => {

    const [gifState, dispatch] = useReducer(gifReducer, gifInitialState)

    const setGifName = (search: string) => {
        dispatch({
            type: 'setGifName',
            payload: search
        })
    }

    return (
        <GifContext.Provider value={{
            gifState,
            setGifName
        }}>
            {children}
        </GifContext.Provider>
    )
}
