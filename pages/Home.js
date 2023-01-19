import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'

export default function Home() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res)=>res.json())
        .then((json)=>setData(json))
    },[])

  return (
    <View>
        <View>
            <Text>Categories</Text>
        </View>
        {console.log(data)}
    </View>
   
  )
}
