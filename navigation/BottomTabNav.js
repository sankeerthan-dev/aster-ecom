import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import Login from '../pages/Login';
import Home from '../pages/Home';

const BottomTab=createBottomTabNavigator()
export default function BottomTabNav() {
  return (
    <BottomTab.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
      <BottomTab.Screen name='home' component={Home} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color, size})=> <Ionicons name="home" color={color} size={size}/>
      }}/>
      <BottomTab.Screen name='account' component={Login} options={{
        tabBarLabel: "Account",
        tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" color={color} size={size}/>
      }}/>
    </BottomTab.Navigator>
  )
}