import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import StackHomeNav, { StackAccNav } from './StackNav';

const BottomTab = createBottomTabNavigator()
export default function BottomTabNav() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen name='Home' component={StackHomeNav} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
      }} />
      <BottomTab.Screen name='Account' component={StackAccNav} options={{
        tabBarLabel: "Account",
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
      }} />
    </BottomTab.Navigator>
  )
}