import { ReactNativeFirebase } from "@react-native-firebase/app";

import React,{useState} from 'react'
import {View,Text,TextInput,Button,StyleSheet,TouchableOpacity,labelValue} from 'react-native'
import { windowWidth,windowHeight } from "./dimension";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import{ Icon} from 'react-native-elements'
const Forminput=({labelValue,placeholderText,iconType,...rest})=>{
    // const[name,setName]=useState()
    return(
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                {/* <Icon name='user' type="FontAwesome" size={25} color="white"/> */}
                <FontAwesome name='user' size={25} color="black"/>


            </View>
            <TextInput

            value={labelValue}
            style={styles.input}
            numberOfLines={3}
            placeholder={placeholderText}
            placeholderTextColor="black"
            {...rest}


            />
        </View>
    )
}
export default Forminput
const styles=StyleSheet.create({
    inputContainer:{
        marginTop:9,
        marginBottom:10,

        width:"100%",
        height:50,
        borderColor:"black",
        // borderRadius:35,
        borderBottomWidth:1,
        borderColor:"teal",
        flexDirection:"row",

        backgroundColor:"white",
        alignItems:"center",
    },
    iconStyle:{
        padding:10,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        borderRightColor:"black",
        borderRightWidth:1,
        width:50

    },
    input:{
        padding:10,
        // flex:1,
        fontSize:13,
        fontFamily:"lato-regular",
        color:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    inputField:{
        padding:10,
        marginBottom:10,
        marginTop:1,
        width:windowHeight/1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1
    }
})