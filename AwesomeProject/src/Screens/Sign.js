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
function Sign(props){
  const[email,setEmail]=useState('')
  const[Name,setName]=useState()
  const[uploading,setUploading]=useState(false)
  
  const[password,setPassword]=useState()
  const{register}=useContext(AuthContext)
    const[transfered,setTransfered]=useState(0)
    const[Images,setImages]=useState(null)
    const {user,logout}=useContext(AuthContext)
    const {use_id}=useContext(AuthContext)

    
    // const{user}=useContext(AuthContext).currentUser;
    // const {user,logout}=useContext(AuthContext)
    // console.log("User",user.uid)
    
    
    

    // const {user}=useContext(AuthContext)
    // await uid={
    
    //   id:use_uid
    // }
    
    
  //   const send=async()=>{
  //     const imageUrl=await UploadPost()
  //     console.log("image Url",imageUrl)
  //     console.log("user",use_id)
      
  //     var user_info={
  //       use_id,
  //       user_Name:Name,
  //       imgUrl:imageUrl
        
  //     }
      
  //     database().ref('/').child('User_info').push(user_info)
  //     // console.log("user",auth().currentUser)
  //     console.log(user)
  //     firestore()
  //     .collection('User_Info')
  //     .add({
  //       // user:user.uid,
  //       // user:user.uid,
  //       Name:Name,
  //       postimg:imageUrl,
  //     })
      
  //       .then(()=>{
  //         console.log("Post Added")
  //       })
  //       .catch((error)=>{
  //         console.log("some thing went wrong",error)
  //       }) 
  //         {register(email,password)}
  //         console.log("register name",register(email,password))
  //       }
  //       const choose= async()=>{
  //         // const ar ray=
          
  //         ImagePicker.openPicker({
  //           width:150,
  //           height:100,
  //           cropping:true,
            
  //         }).then((image)=>{
  //           // const ImageList = response.map((image, index) => ({
  //             console.log("image",image)
  //             const Imageuri=Platform.OS=='Android'?image.sourceURL:image.path
  //             // console.log("Url to string ",Url)
  //             // }));
  //             setImages(Imageuri);
  //             console.log("imageuri",Imageuri);
  //             console.log(Images)
  //           }
            
  //           )}
  //           const UploadPost= async()=>{
  //             const uploaduri=Images
  //             console.log("Image url",uploaduri)
              
              
  //             let filename=uploaduri.substring(uploaduri.lastIndexOf('/')+1)
  //         const extension=filename.split('.').pop()
  //         const name=filename.split('.').slice(0,-1).join('.');
  //         filename=name+Date.now()+'.'+extension
  //         console.log("file",filename)
  //     setUploading(true)
  //     setTransfered(0)
  //   const storageref=storage().ref(`photos/${filename}`);
  //   // const task=storage().ref(fileArray).putFile(fileArray)
  //   const task= storageref.putFile(uploaduri)
  //   console.log("String Url milyo",task)
  //   // console.log("User ID",user.uid)
  //   task.on('state_changed', taskSnapshot => {
  //     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
  //     setTransfered(
  //       Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes )* 100
  //       )
  //       console.log(transfered)
  //   });
  //   try{
  //     await task
      
  //     const url= await storageref.getDownloadURL()
      
      
  //     setUploading(false)
  //     Alert.alert("succesfully Submit")
  //     console.log('children',children)
  //     return url
  //   } catch(e){
  //     console.log(e)
  //     return null
  
  //   }
  //   setImages(null)
    
  // }
      

    return(
        <>
        {/* {children} */}
         <ScrollView  behaviour = "height"
                keyboardVerticalOffset = {160}
                style= {{ marginTop: '50%',flex:1 }}>

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
            <Forminput
            labelValue={email}
            onChangeText={(text)=>setEmail(text)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address "
            autoCaptalize="none"
            autoCorrect={false}
            
            />
            <Forminput
            labelValue={password}
            onChangeText={(userpassword)=>setPassword(userpassword)}
            placeholderText="password"
            iconType="search"
            keyboardType="password"
            autoCaptalize="none"
            secureTextEntry={true}
            />
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
onPress={()=>{register(email,password)}} />
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
        padding:20,
        
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

export default Sign
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