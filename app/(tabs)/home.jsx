import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../../components/LoginScreen'


export default function home() {
  return (
    <View>
      <Text syle={{fontsize:40 , fontFamily:'outfit'}}>home</Text>
      <LoginScreen />

    </View>
  )
}