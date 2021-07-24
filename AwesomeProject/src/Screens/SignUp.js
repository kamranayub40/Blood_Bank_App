// import React, { useState } from 'react'
// import {Text,TouchableOpacity,View,StyleSheet,ScrollView,Alert,Image} from 'react-native'
// import { Icon } from 'react-native-elements'
// import { TextInput,Button, FlatList } from 'react-native-gesture-handler'
// import { Card } from 'react-native-paper';
// import database from '@react-native-firebase/database'
// import { SafeAreaView } from 'react-native'
// import ImagePicker from 'react-native-image-crop-picker'




// function Sign(props){
//   const [name,setName]=useState()
//   const [emailname,setEmail]=useState()
//   const[Images,setImages]=useState(null)
//   const Choose = async()=>{
//     // const ar ray=
    
//     ImagePicker.openPicker({
//       width:150,
//       height:100,
//       cropping:true,
//       // multiple:true,
//       // waitAnimationEnd:false,
//       // includeExif:true,
//       // forceJpg:true,
//       // compressImageQuality:0.8,
//       // maxFiles:10,
//       // mediaType:'any',
//       // includeBase64:true
  
//     }).then((image)=>{
//             // const ImageList = response.map((image, index) => ({
//               console.log("image",image)
//               const Imageuri=Platform.OS=='Android'?image.sourceURL:image.path
//               // console.log("Url to string ",Url)
//             // }));
//             setImages(Imageuri);
//             console.log("imageuri",Imageuri);
//             console.log(Images)
//           }
          
//     )}

//   const[password ,setPassword]=useState()
//   const sign=()=>{
//     let Signer={
//       name:name,
//       password:password
//     }
//     database().ref('/').child('Signer').push(Signer)

//   }
//   return(
//       <>
      
//       <View style={{backgroundColor:"coral",flex:1}}>

//     <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'white'}}>
//     <View style={{textAlign:'center',marginLeft:30,flexDirection:'row',flex:1,color:"white"}}>
//     <Icon  name='arrow-left' 
  
//   color="black" size={35}onPress={() => props.navigation.navigate("login")} />
      
 


//     <Text style={{fontSize:30,marginLeft:50,color:"black"}}>SIGNUP</Text>
//       </View>
//   </TouchableOpacity>
//   <Text style={{top:40,textAlign:"center",fontSize:30,color:"white"}}>WELLCOME</Text>

//   <View style={{height:"100%",flex:1}}>
//   <ScrollView  behaviour = "height"
//                 keyboardVerticalOffset = {90}
//                 style= {{ marginTop: '20%',flex:1}}>
//   <TextInput placeholder="Enter your Name" value={name} onChangeText={(name)=>setName(name)} style={{borderWidth:2,margin:5,borderRadius:30,top:10,borderColor:"white",color:"white"}}/>

//     <TextInput placeholder="Enter your EmailName" value={emailname} keyboardType="email-address" onChangeText={(emailname)=>setEmail(emailname)} style={{borderWidth:2,margin:5,borderRadius:30,top:10,borderColor:"white",color:"white"}}/>
//     <TextInput placeholder="Enter your Password" value={password} secureTextEntry onChangeText={(password)=>setPassword(password)} style={{borderWidth:2,margin:5,borderRadius:30,top:10,borderColor:"white",color:"white"}}/>
//     {/* <Button title="Login"/> */}
//     <TouchableOpacity style={{margin:10,borderWidth:2,marginLeft:95,borderRadius:30,
//       borderColor:"white",width:160,backgroundColor:"coral",color:"white",height:30}} onPress={Choose} >
//       <Text style={{color:"white",textAlign:"center",fontSize:20}}>Profile Picture</Text>
//     </TouchableOpacity>
//     <Image source={{uri:Images}}
//     style={{width:150,height:100,borderRadius:100,marginLeft:99}}/>
//     {/* <SafeAreaView style={{flex: 1}}>  */}
    
//      {/* <FlatList
//           style={{top:4,flexDirection:"row",flexWrap:"wrap",marginLeft:70,}}
//           data={Images}
//           renderItem={({item})=>{
//             return ( 
//               <TouchableOpacity  style={{borderWidth:1,marginBottom:5,borderRadius:1}}>
//               <Image
//         source={{ uri:item.Url }}
//         style={ { width: 150, height: 100,} }
//       />
              
//            </TouchableOpacity>
//               )
//           }
//         }
//         keyExtractor={(item)=>item.id}
//           showsVerticalScrollIndicator={false}
//           /> */}
        
//     {/* {uploading?(

//     <Text>{transfered}% completed 
//       <ActivityIndicator size="large" color="teal"/></Text>
      
      
//     ):
//     <Button title="Submit" onPress={send} />
// } */}
// {/* </SafeAreaView> */}
//     <TouchableOpacity style={{borderWidth:2,marginLeft:110,borderRadius:30,borderColor:"white",width:120,backgroundColor:"coral",color:"white",height:30}} onPress={sign}>
//       <Text style={{color:"white",textAlign:"center",fontSize:20}}>SIGNUP</Text>
//     </TouchableOpacity>

//                 </ScrollView>
//   </View>
//       </View>
//   </>
//   )
// }

// export default Sign



import React, { useContext, useState,createContext,useCallback } from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity, Image,ActivityIndicator,Alert} from 'react-native'
import { colors, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
// import Forminput from '../config/formInput'
import Forminput from '../Screens/forminput'
// import FormButton from '../config/formbutton'
import FormButton from '../Screens/formButton'
// import { AuthContext } from '../config/Auth'
import {AuthContext} from '../config/Auth'
import storage from '@react-native-firebase/storage';
// import ImagePicker from 'react-native-image-crop-picker'
import firestore from '@react-native-firebase/firestore'
import ImagePicker from 'react-native-image-crop-picker'
import { ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from "@react-native-firebase/database"
export const AuthContext1=createContext();
function SignUp(props){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const[Name,setName]=useState()
  const[uploading,setUploading]=useState(false)
  
  // const[password,setPassword]=useState()
  const{register}=useContext(AuthContext)
    const[transfered,setTransfered]=useState(0)
    const[Images,setImages]=useState(null)
    const {user,logout}=useContext(AuthContext)
    const {use_id}=useContext(AuthContext)

   const registerUp =async(email,password)=>{
     await auth().createUserWithEmailAndPassword(email,password).then(async function(usercard){
       const use_id={

        id:usercard.user.uid
      }
      console.log("userId",use_id)
     }

     )
   }
      

    return(
        <>
        {/* {children} */}
         <ScrollView  behaviour = "height"
                keyboardVerticalOffset = {160}
                style= {{ marginTop: '20%',flex:1}}>

        <View style={styles.container}>
            {/* <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          /> */}
            <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
            {/* <TextInput
            Value={email}
            onchangeText={(email)=>setEmail(email)}
            style={{borderWidth:2}}
            /> */}
            {/* <Forminput
            labelValue={Name}
            onChangeText={(text)=>setName(text)}
            placeholderText="Name"
            iconType="user"
            keyboardType="email-address "
            autoCaptalize="none"
            autoCorrect={false}

            /> */}
            <TextInput 
            placeholder="Enter your name"
            value={email}
            onChangeText={(email)=>setEmail(email)}
             style={{borderWidth:2,width:180,borderRadius:50}}/>
            <TextInput
            value={password}
            onChangeText={(password)=>setPassword(password)}
             placeholder="Enter your Password"
            style={{borderWidth:2,width:180,borderRadius:50}}/>

            
            {/* <FormButton
            iconType="image"
            buttonTitle="Profile Picture"
            onPress={choose}  /> */}
               {/* <Image source={{uri:Images}}
              style={{width:150,height:100,borderRadius:100,marginLeft:19}}/> */}
           
            {/* <Button title="signUp"
            onPress={()=>console.log(email)}/> */}
                {/* {uploading?(

<Text>{transfered}% completed 
  <ActivityIndicator size="large" color="teal"/></Text>
  
  
): */}
<FormButton
buttonTitle="SignUp"
onPress={()=>console.log(registerUp(email))} />
{/* // onPress={()=>props.navigation.navigate('user_profile')}/> */}
{/* } */}
         
        </View>
        </ScrollView>
        {/* <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By  Registring ,you confirm that you accept our </Text>
            <TouchableOpacity onPress={()=>alert("Terms clicked")}><Text style={[styles.color_textPrivate,{color:"red"}]}>Terms and services</Text></TouchableOpacity>
            <Text style={[styles.color_textPrivate,{color:"red"}]}>and</Text>
            <Text style={[styles.color_textPrivate,{color:"red"}]}>privacy policy</Text>
            

        </View> */}
      </>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    
    text:{
        fontFamily:"kufan-SemiBoldItalic",
        fontSize:20,
        marginBottom:10,
        color:"black"
    },
    navButton:{
        marginTop:1,
        

    },
    
    navButtonText:{
        fontSize:18,
        fontWeight:'500',
        color:"white",
        fontFamily:"lato-regular"
    },
    textPrivate:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginVertical:27,
        justifyContent:"center"
    },
    color_textPrivate:{
        fontSize:14,
        fontWeight:"400",
        fontFamily:"Lato-regular",
        color:"grey"
    }

})

export default SignUp
//         <View >

//     <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'teal'}}>
//     <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
//         <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}> 
//         <Icon size={29}
//   name='rowing' />
//         </TouchableOpacity>
   
//         <Text style={{fontSize:30,marginLeft:70,color:"white"}}>LOGIN</Text>
//         </View>
//   </TouchableOpacity>
//       <View style={styles.form}>
//           <TextInput style={styles.formInput}  placeholder="Enter your Email"/>
//           <TextInput style={styles.formInput}  placeholder="Enter your password"/>
//           <Button title="Login"/>
//           <Text style={{textAlign:"center"}}>Are You New?<TouchableOpacity style={{borderRadius:4,borderWidth:2,marginBottom:4,backgroundColor:"darkblue"}} onPress={()=>props.navigation.navigate("signup")}><Text style={{color:"white"}}>SIGNUP</Text></TouchableOpacity></Text>



//       </View>
//       </View>