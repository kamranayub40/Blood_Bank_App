import React,{useState,useEffect,useContext} from 'react'
import {View,Text,styleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
// import {DrawerNavigationItem} from '@react-navigation/drawer'
// import Navigation from './Navigation'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../config/Auth';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import {DrawerItem, DrawerNavigationItem} from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import { Icon } from 'react-native-elements'





function Sidebar(props){
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)
  const {user,logout}=useContext(AuthContext)
  const [userData1,setUserData]=useState()
  const[arr ,setState]=useState()
    const[arr2 ,setState2]=useState()
  database().ref('User_info').orderByChild('uid').once('value', snapshot => {
    var arr=[]
    // var arr2=[]
    snapshot.forEach((uid)=>{
      const state=uid.val()
      const state2=uid.val()
      // console.log("User_Info",state)
      
      if(state2.uid==user.uid ){
        // console.log(state2)
        // console.log(arr)
        return  arr.push(state)
       
        
        
      }
      
    
    })
    return setState(arr)
  }).catch((Err)=>{console.log(Err,"Net Error")})
//   // console.log(user.uid)
//   // const getUser = async () => {
//   //   database()
//   //   .ref('User_info' + user.email)
//   //   .once('value')
//   //   .then(snapshot => {
//   //     console.log(snapshot.val()) 
//   //   });
//   // };
//   // console.log(getUser)

//   // // Get user on mount
//   // useEffect(() => {
//   //   getUser();
//   // }, []);
//   // const getUser = async () => {
//   //   try {
//   //     const documentSnapshot = await firestore()
//   //       .collection('User_Profile')
//   //       .doc(user.uid)
//   //       .get();

//   //       const userData = documentSnapshot.data();
//   //     setUserData(userData);
//   //   } catch(e){
//   //     console.log(e)
//   //   }
//   //   console.log('user data',user.uid)
//   //   console.log('user data',userData)

//   // };

//   // // Get user on mount
//   // useEffect(() => {
//   //   getUser();
//   // }, []);
    
//     // useEffect(()=>{
//     //     const fetchData=async()=>{
//     //         try{
//     //             const list=[]
//     //             await firestore()
//     //             .collection('User_Profile')
//     //             .get()
//     //             .then((querySnapshot)=>{
//     //                 querySnapshot.forEach(doc=>{
//     //                     const {postimg,Name}=doc.data()
//     //                     // postimg=user.uid?

//     //                         list.push({
//     //                             // itemName:itemName,
//     //                             postimg:postimg,
//     //                             Name:Name
//     //                         })
                        
//     //                 })
//     //             })
//     //             setPost(list)
//     //             if(loading)[
//     //                 setloading(false)
//     //             ]
//     //             console.log('product',list)
//     //         }catch(e){
//     //             console.log(e)
//     //         }
//     //     }
//     //     fetchData();

//     // },[])
//     database()
//    .ref(`/${user.uid}`).on('value',(snapshot)=>{
//     console.log("value",snapshot.val());

// })
//     const getUser = async () => {
//         try {
//           const documentSnapshot = await firestore()
//             .collection('User_Profile')
//             .doc(user.uid)
//             .get();
    
//           const userData = documentSnapshot.data();
//           setUserData(userData);
//         } catch {
//           //do whatever
//         }
//       };
      
//       // Get user on mount
//       useEffect(() => {
//         getUser();
//         console.log(getUser)
//       }, []);
//       console.log("UserData",getUser)
      return(
<>
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:"darkgrey",height:170,flex:1}}>
            {/* <FlatList
          style={{top:3,flexDirection:"row",flexWrap:"wrap",marginLeft:10,}}
          data={post}
          renderItem={({item})=>{
              return ( 
              <TouchableOpacity  >
              <Image
        source={{ uri:item.postimg }}
        style={ { width: 120, height: 110,borderRadius:80,marginLeft:70} }
      />
              <Text style={{margin:5,color:"white",fontSize:20,marginLeft:50}}>{item.Name}</Text>
              <Text>{user && user?.firstName}</Text>
      
          </TouchableOpacity>
              )
          }
        }
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          /> */}
          <FlatList
                    data={arr}
                    
                    
                    renderItem={({ item}) => {
                      
                      
                      
                      return  <View >
                        <View  style={{fontSize:20,color:"white",marginLeft:49}}>
                              <Image
                              source={{ uri:item.imgUrl }}
                              style={ { width: 120, height: 110,borderRadius:80,top:3} }
                              />                   

                       </View>
                            <Text style={{fontSize:23,color:"white",marginLeft:49}}>{item.user_Name}</Text>
                       
                       </View>}
                       
                        
                        
                        
                      }
                      keyExtractor={(item) => item.id}
                      
                      extraData={arr}
                      
                    
                      
                />
          <TouchableOpacity >

            {/* <Avatar.Image size={100} style={{marginLeft:30}} source={require('../config/avtar.png')} /> */}
            {/* <Text style={{color:"white",marginLeft:30,fontSize:15}}>{user.email}</Text> */}
          </TouchableOpacity>
            </View>
           
           <DrawerItemList {...props}/>

        </DrawerContentScrollView> 
          <Drawer.Section >
          <DrawerItem 
          icon={({color,size})=>(
              <Icon
              name="exit-to-app"
              color="red"
              size={24}
              
              />
          )}
          label="sign Out"
      onPress={logout} 
          
          
          
          >

          </DrawerItem>

      </Drawer.Section>
</>
    )

   
    
}
export default Sidebar