import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {useWarmUpBrowser} from '@/hooks/useWarmUpBrowser'
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from '@clerk/clerk-expo'

const {startOAuthFlow}= useOAuth({ strategy: "oauth_google"});
const onPress = React.useCallback(async ()=>{
    try{
        const {createdSessionID , signIN, SignUP, SetActive}=
        await startOAuthFlow();
        if (createdSessionID){
            SetActive({ session: createdSessionID });
        }else{
            //my text here 
        }
        }catch(err){
            console.error("Oath error", err);
        }
},[]);

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:"center",
            marginTop:75,
        }}>
        <Image source={require('@/assets/images/loginPage.jpg')}
        style={{
            width:220,
            height:450,
            borderRadius:20,
            borderWidth:8,
            borderColor:'#000'
        }}
        />
        </View >

        <View style={styles.subContainer}>
            <Text style={{
                fontSize:35,
                fontFamily:'outfit-Bold',
                textAlign:'center'
            }}> Your Ultimate 
            <Text style={{
                color:'#7F57F1'
            }}> Community Bussiness Directory</Text> App</Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY
            }}>Find you favorite business near you and post your own business to<Text/></Text>

            <TouchableOpacity style={styles.btn}
            onPress={onPress} >
                <Text style={{
                    textAlign:'center',
                    color:'#fff'
                }}>Let's get started</Text>
            </TouchableOpacity >
        </View>
    </View>
  )
}



 const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#fff',
        padding:20,
        marginTop:-20
    },
    btn:{
        backgroundColor:'#7F57F1',
        padding:16,
        borderRadius:99
    }

 })