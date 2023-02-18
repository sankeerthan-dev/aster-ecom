import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Image, FlatList, Text, ScrollView } from 'react-native'
// import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import SearchBox from '../Components/SearchBox'
import Images from '../images/Images'
import { Card, Button } from 'react-native-paper'
import { dataSet, categoryImages, images,advertise,mensClothing,womensClothing,popularProducts } from '../Data'
import { BannerImages } from '../Components/BannerImages'
import { Advertise } from '../Components/Advertise'
import PopularProducts from '../Components/PopularProducts'
import CustomCards from '../Components/CustomCards'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])
  const [imgActive,setimgActive] = useState(0);
 const onChange = (nativeEvent)=>{
    if(nativeEvent){
      const slide =Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
      if(slide != imgActive){
        setimgActive(slide);
      }
    }
  }
  return (
    <>
      <View>
        <SearchBox />
        <ScrollView style={{marginBottom: 80}}>
        <View style={styles.categoryContainer}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryImages}
        renderItem={({ item }) => (
          <View style={styles.item}>
          <Image style={{width:40,height:65,borderRadius:10}} source={{uri:item.image}} />
          <Text style={{fontSize:10}}>{item.title}</Text>
          </View>
        )
        }
      />
        </View>
        <BannerImages images={images} />
        <Advertise advertise={advertise} />
        <Text style={styles.SubHeaderStyle}>Men's Clothing</Text>
        <CustomCards cards={mensClothing} />
        <Text style={styles.SubHeaderStyle}>Women's Clothing</Text> 
        <CustomCards cards={womensClothing} />
        <Text style={styles.SubHeaderStyle}>Popular Nearby</Text>
      <PopularProducts cards={popularProducts} />
        <View>
          <Text style={styles.SubHeaderStyle}>Top Deals</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {dataSet.map((item) => (
            <Card style={styles.cardDesign} >
              <TouchableOpacity onPress={() => console.log("pressed")}><Card.Title title={item.title} subtitle={item.category} />
              </TouchableOpacity>
              <Card.Cover source={{ uri: item.image }} resizeMode="contain" style={{ backgroundColor: '#fff', padding: 10 }} />
            </Card>
          ))}
        </View>
        </View>
        </ScrollView>
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
    justifyContent: 'center',
  },
  cardDesign: {
    padding: 10,
    backgroundColor: '#ffff',
    borderColor: 'white',
    width: 185,
    margin: 7,
  },
  SubHeaderStyle:{
    marginLeft: 20,
    marginTop:5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    margin:7,
    padding:7
  },
})