import React, {useState, useEffect} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'
 
export default function Home() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res)=>res.json())
        .then((json)=>setData(json))
    },[])

  return (
    <View style={styles.categoryContainer}>
        <View>
            <TouchableOpacity><Ionicons name='ios-shirt-sharp' size={32} /> Clothing</TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity><MaterialCommunityIcons name='table-furniture' size={32} /> Furniture</TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity><MaterialCommunityIcons name='shoe-sneaker' size={32} /> Shoes</TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity><FontAwesome name='television' size={32} /> Electronics</TouchableOpacity>
        </View>
    </View>
   
  )
}

const styles=StyleSheet.create({
  categoryContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})