import React from 'react'
import {View,FlatList,Image,Text} from 'react-native'
import {Card} from 'react-native-paper'

export const Advertise = ({advertise}) => {

  return (
    <View>
        <Card style={{margin:5,marginTop:10}}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={advertise}
                renderItem={({ item }) => (
                <View style={{margin:5,flexDirection:'row'}}>
                <Image style={{width:40,height:40,borderRadius:10}} source={{uri:item.image}} />
                <Text style={{width:60,marginLeft:5,fontSize:10}}>{item.title}</Text>
            </View>
            )
            }
        />
        </Card>
    </View>
  )
}