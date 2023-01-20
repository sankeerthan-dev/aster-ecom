import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import SearchBox from '../Components/SearchBox'
import Images from '../images/Images'
export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])
  return (
    <>
      <View>
        <SearchBox />
        <View>
          <Image source={Images.banner1} style={{ width: '100%', height: 120 }} />
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
            <TouchableOpacity><Ionicons name='ios-shirt-sharp' size={32} style={{ marginTop: 3 }} /><Text>Clothing</Text></TouchableOpacity>
          </View>
          <View style={styles.categoryIcon}>
            <TouchableOpacity><MaterialCommunityIcons name='table-furniture' size={38} /><Text>Furniture</Text></TouchableOpacity>
          </View>
          <View style={styles.categoryIcon}>
            <TouchableOpacity><MaterialCommunityIcons name='shoe-sneaker' size={38} /><Text>Shoes</Text></TouchableOpacity>
          </View>
          <View style={styles.categoryIcon}>
            <TouchableOpacity><FontAwesome name='television' size={32} style={{ marginTop: 6 }} /><Text>Electronics</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: 12,
    margin: 7
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})