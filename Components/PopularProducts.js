import React from 'react';
import {View,Text,FlatList,Image} from 'react-native'
import {Card} from 'react-native-paper'

const PopularProducts =({cards})=>{
  return(
    <View style={{padding:5}}>
    <FlatList
     horizontal
      showsHorizontalScrollIndicator={false}
        data={cards}
        renderItem={({ item }) => (
          <Card style={{margin:10,width:120,height:160}}>
            <Card.Cover style={{width:120,height:100}} source={ { uri:item.image }}/>
             <Card.Content>
                <Text variant="titleLarge" style={{width:120,fontSize:14}}>{item.title}</Text>
                <Text style={{color:'green',fontSize:12,paddingTop:5}}>{item.popular}</Text>
              </Card.Content>
          </Card>
        )
        }
      />
    </View>
  )
}

export default PopularProducts;
