import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Stack= createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home}/>  
      <Stack.Screen name='account' component={Login}/>  
    </Stack.Navigator>
  )
}