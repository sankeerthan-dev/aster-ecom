import { View, Text } from 'react-native'
import React, {Children, createContext, useState} from 'react'

export const AuthContext=createContext()
export  function AuthContextProvider({children}) {
    const [auth, setAuth]=useState({token: null,})
    const loginUser=(token)=>{
        setAuth({...auth,token})
    }
    const logoutUser=()=>{
        setAuth({token:null,})
    }
  return (
    <AuthContext.Provider value={{loginUser, logoutUser, auth}}>
        {children}
    </AuthContext.Provider>
  )
}