import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AccDetails from '../pages/AccDetails'
import PrivateRouter from '../context/PrivateRouter'
const Stack = createStackNavigator()

export default function StackHomeNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}
export function StackAccNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={
        <PrivateRouter>
        {AccDetails}
        </PrivateRouter>} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator>
  )
}