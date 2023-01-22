import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Login() {
  return (
  <View style={{alignItems:'center', backgroundColor:'#ffff', height: '100%'}}>
  <View style={styles.formContainer}>
    <TextInput placeholder='Enter email ID' style={styles.inputDesign}/>
    <TextInput secureTextEntry={true} placeholder='Enter password' style={styles.inputDesign}/>
    <TouchableOpacity style={styles.loginButton}><Text>Login</Text></TouchableOpacity>
  </View>
  </View>
  )
}

const styles=StyleSheet.create({
  formContainer:{
    margin:'auto',
    // flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    justifyContent: 'center',
    marginTop: '60%'
  },
  inputDesign:{
    borderBottomColor: '#047BD5',
    padding: 5,
    borderBottomWidth: 3 ,
    width: '100%',
    margin: 6
  },
  loginButton:{
    backgroundColor: '#047BD5',
    paddingTop: 11,
    alignItems: 'center',
    borderRadius: 7,
    width: '35%',
    color:'#ffff',
    height: '20%',
    marginTop: 40
  }
})