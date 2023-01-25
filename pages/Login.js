import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { StackAccNav } from '../navigation/StackNav'

export default function Login({navigation}) {
  
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#ffff', height: '100%' }}>
      <View style={styles.formContainer}>
        <TextInput placeholder='Enter email ID' style={styles.inputDesign} />
        <TextInput secureTextEntry={true} placeholder='Enter password' style={styles.inputDesign} />
        <TouchableOpacity style={styles.loginButton}><Text style={{ color: '#ffff' }}>Login</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.signUpNav} onPress={()=>navigation.navigate('Signup') }>Sign up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 'auto',
    alignItems: 'center',
    width: '75%',
    justifyContent: 'center',
    marginTop: '60%'
  },
  inputDesign: {
    borderBottomColor: '#047BD5',
    padding: 5,
    borderBottomWidth: 2,
    width: '100%',
    margin: 6
  },
  loginButton: {
    backgroundColor: '#047BD5',
    paddingTop: 11,
    alignItems: 'center',
    borderRadius: 7,
    width: '35%',
    height: '20%',
    marginTop: 40
  },
  signUpNav: {
    color: 'blue',
    marginTop: 5,
    textDecorationLine: 'underline'
  }
})