import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'


export default function AccDetails() {
  return (
    <View>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarAccWrapper}>
          <MaterialCommunityIcons size={102} name='account-circle-outline'/>
        </View>
        <Text style={styles.avatarName}>Hey, Eve Holt!</Text>
      </View>
      <View>
        <TouchableOpacity><View style={styles.profileOptionMenu}><FontAwesome5 size={22} style={styles.menuIconDesign} name='edit'/><Text style={styles.menuTextDesign}>Edit Profile</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><Feather size={22} name='settings' style={styles.menuIconDesign} /><Text style={styles.menuTextDesign}>Account Settings</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><Feather size={22} name='box' style={styles.menuIconDesign} /><Text style={styles.menuTextDesign}>Your orders</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><Entypo size={22} style={styles.menuIconDesign} name='location'/><Text style={styles.menuTextDesign}>Add / change address</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><Entypo size={22} style={styles.menuIconDesign} name='heart'/><Text style={styles.menuTextDesign}>Wishlist</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><AntDesign size={22} style={styles.menuIconDesign} name='shoppingcart'/><Text style={styles.menuTextDesign}>Cart</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.profileOptionMenu}><Entypo size={22} style={styles.menuIconDesign} name='log-out'/><Text style={styles.menuTextDesign}>Logout</Text></View></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatarWrapper: {
    backgroundColor: '#047BD5',
    height: '35%',
    alignItems: 'center',
  },
  mainContainer: {
    height: '100%',
  },
  profileOptionMenu: {
    borderWidth: 1,
    borderColor: '#808080',
    margin: 8,
    padding: 8,
    textAlign: 'left',
    borderRadius: 8,
    flexDirection: 'row',
  },
  menuIconDesign: {
    margin: 5,
  },
  menuTextDesign: {
    fontSize: 16,
    margin: 5,
  },
  avatarAccWrapper:{
    backgroundColor: '#ffff',
    borderRadius: 50,
    marginTop:70,
  },
  avatarName:{
    color: '#ffff',
    fontSize:20,
    marginTop: 20
  }
})