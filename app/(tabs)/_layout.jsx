import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Colors} from '../../constants/Colors'

function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tabs.Screen name="home"
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}/>
      }}/>

      <Tabs.Screen name="explore"
      options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color}) =><MaterialIcons name="explore" size={24} color={color}/>
      }}/>

      <Tabs.Screen name="profile"
      options={{
        tabBarLabel:"Profile",
        tabBarIcon:({color})=><AntDesign name="profile" size={24} color={color} />
      }}/>
    </Tabs>
  )
}
export default TabLayout;