import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function DetailedView() {
    const [item,setItem]=useState('')
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
    })
  return (
    <View>
      <Text>DetailedView</Text>
    </View>
  )
}