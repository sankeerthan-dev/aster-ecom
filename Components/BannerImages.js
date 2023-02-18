import React,{useState} from 'react'
import {View,Text,ScrollView,Image,StyleSheet,Dimensions} from 'react-native'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const BannerImages = ({images}) => {
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
  )
}
const styles=StyleSheet.create({
    item:{
      margin:7,
      padding:7
    },
    container:{
      flex:1,
      backgroundColor:'#FFE7CC'
    },
    wrap:{
      width:WIDTH,
      height:HEIGHT *0.2
    },
    wrapDot:{
      position:'absolute',
      bottom:0,
      flexDirection:'row',
      alignSelf:'center'
    },
    dotActive:{
      margin:3,
      color:'black'
    },
    dot:{
      margin:3,
      color:'gray'
    }
  })
