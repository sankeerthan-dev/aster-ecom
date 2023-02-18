import React from 'react';
import {View,Text,FlatList,Image} from 'react-native'
import {Card} from 'react-native-paper'

const CustomCards =({cards})=>{
  return(
    <View style={{padding:10}}>
    <FlatList
    horizontal
        data={cards}
        renderItem={({ item }) => (
          <Card style={{width:150,margin:10,marginTop:10,marginBottom:10}}>
            <Card.Cover style={{ width:150,height:200}} source={ { uri:item.image }}/>
             <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
              </Card.Content>
          </Card>
        )
        }
      />
    </View>
  )
}

export default CustomCards;