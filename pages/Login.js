import React, {useState, useEffect, useContext} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { StackAccNav } from '../navigation/StackNav'

export default function Login({navigation}) {
  const {loginUser}=useContext(AuthContext)
  const {auth}=useContext(AuthContext)
  const [mail,setMail]=useState('')
  const [pwd, setPwd]=useState('')
  const submitAction=()=>{
    // POST request using fetch()
    try{
fetch("https://reqres.in/api/login", {
  method: "POST",
  body: JSON.stringify({
    email:mail,password:pwd
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => loginUser(json.token));

  }catch(e){
    console.log(e)
  }}
  
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#ffff', height: '100%' }}>
      <View style={styles.formContainer}>
        <TextInput placeholder='Enter email ID' style={styles.inputDesign} onChange={(e)=>{setMail(e.nativeEvent.text); console.log(mail)}} />
        <TextInput placeholder='Enter password' style={styles.inputDesign} onChange={(e)=>{setPwd(e.nativeEvent.text); console.log(pwd)}} />
        <TouchableOpacity style={styles.loginButton} onPress={submitAction} ><Text style={{ color: '#ffff' }}>Login</Text></TouchableOpacity>
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