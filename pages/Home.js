import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Image, FlatList, Text, ScrollView } from 'react-native'
// import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import SearchBox from '../Components/SearchBox'
import Images from '../images/Images'
import { Card, Button } from 'react-native-paper'
import { dataSet, categoryImages, images } from '../Data'

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
          <Text>{item.title}</Text>
          </View>
        )
        }
      />
        </View>
        {/* start */}
        <View style={styles.wrap}>
    <ScrollView
    onScroll={({nativeEvent})=> onChange(nativeEvent)}
    showsHorizontalScrollIndicator ={false}
    pagingEnabled
    horizontal
    style={styles.wrap}
    >
    {
      images.map((e,index)=>
      <Image 
      key={e}
      resizeMode='stretch'
      style={styles.wrap}
      source={{uri: e}}
      />
      )
    }
    </ScrollView>
    <View style ={styles.wrapDot}>
    {
      images.map((e,index)=>
      <Text
      key={e}
      style={imgActive == index ? styles.dotActive :styles.dot}
      > ● </Text>
      )
    }
    </View>
    </View>
    {/* end */}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    margin:7,
    padding:7
  },
})