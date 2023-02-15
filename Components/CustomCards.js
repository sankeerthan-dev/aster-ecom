import React from 'react';
import {View,Text,FlatList,Image} from 'react-native'
import {Card} from 'react-native-paper'

const CustomCards =({cards})=>{
  return(
    <View style={{padding:10}}>
    <FlatList
    numColumns={2}
        data={cards}
        renderItem={({ item }) => (
          <Card style={{width:150,margin:10,marginTop:10,marginBottom:10}}>
            <Card.Cover style={{ width:150,height:200}} source={ { uri:item.image }}/>
             <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
              </Card.Content>
          </Card>
          // <View style={{margin:20}}>
          // <Image style={{width:100,height:100,borderRadius:10}} source={{uri:item.image}} />
          // <Text>{item.title}</Text>
          // </View>
        )
        }
      />
    </View>
  )
}

export default CustomCards;