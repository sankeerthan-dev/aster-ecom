import React, { useState, useEffect } from 'react'
import {View, TouchableOpacity, StyleSheet, Image, FlatList, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import SearchBox from '../Components/SearchBox'
import Images from '../images/Images'
import {Card,Button} from 'react-native-paper'

const dataSet=[
  {
    id:'1',title:'Mens Cotton Jacket',price:'	55.99',image:	'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',category:"men's clothing"
  },
   {
    id:'2',title:'Solid Gold Petite Micropave ',price:'168',image:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',category:'jewelery'
  },
   {
    id:'3',title:'SanDisk SSD PLUS 1TB Internal SSD',price:'109',image:'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',category:'electronics'
  },
   {
    id:'4',title:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:'9.85',image:	'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',category:"women's clothing"
  }
]

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])
  const renderItem =({ item })=>{
    return(
      <>
      <Card style={{padding:10, marginTop:25,marginBottom:25,marginLeft:50,marginRight:50,borderRadius:10,borderColor:'white'}} >
        <TouchableOpacity onPress={()=>console.log("pressed")}><Card.Title title={item.title} subtitle={item.category} />
        </TouchableOpacity> 
        <Card.Cover source={{ uri: item.image }} resizeMode="contain" style={{backgroundColor:'#fff',padding:10}} />
      </Card>
      </>
    )
  }
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
        <FlatList data={dataSet} renderItem={renderItem} />
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
    margin: 7,
    alignItems: 'center'
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})