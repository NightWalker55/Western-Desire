import React,{useContext,useState,useEffect} from 'react'
import {auth} from './Firebase'

const AppContext = React.createContext();

export const AppProvider = ({children})=>{


    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}