import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.formContainer}>
        <TextInput placeholder='Enter email address' style={styles.inputBox} />
        <TextInput placeholder='Enter First Name' style={styles.inputBox} />
        <TextInput placeholder='Enter Last Name' style={styles.inputBox} />
        <TextInput secureTextEntry={true} placeholder='Password' style={styles.inputBox} />
        <TextInput secureTextEntry={true} placeholder='Confirm password' style={styles.inputBox} />
        <TouchableOpacity style={styles.loginButton}><Text style={{color:'#ffff'}}>SignUp</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    wrapper:{
        height:'100%',
        backgroundColor: '#ffff',
        alignItems:'center'
    },
    formContainer:{
        alignItems: 'center',
        marginTop:'50%',
        width: '75%'
    },
    inputBox:{
        borderBottomColor:'#047BD5',
        borderBottomWidth: 2,
        margin: 7,
        width: '100%',
        padding:5
    },
    loginButton: {
        backgroundColor: '#047BD5',
        paddingTop: 11,
        alignItems: 'center',
        borderRadius: 7,
        width: '35%',
        height: 50,
        marginTop: 40
      },
})