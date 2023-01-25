import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Login from './Login'
import AccDetails from './AccDetails'
import { AuthContext } from '../context/AuthContext'


export default function Account({navigation}) {
    const { auth } = useContext(AuthContext)
    return (<>{auth.token ? (navigation.navigate('AccDetails')) : (navigation.navigate('Login'))}</>)
}