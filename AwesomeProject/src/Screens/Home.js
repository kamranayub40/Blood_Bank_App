import React,{useContext} from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { icon } from 'react-native-paper';
// import {Icon} from 'react-native-vector-icons'
// import { Entypo } from '@react-native-vector-icons'
import {Icon} from 'react-native-elements'
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';
import { Card } from 'react-native-paper';
import FormButton from '../Screens/formButton'
import { AuthContext } from '../config/Auth';
// const {user,logout}=useContext(AuthContext)

// import (AuthContext)


function Home(props){
  const {user,logout}=useContext(AuthContext)
  
    console.log("User",user.uid)
  return(<>
    <TouchableOpacity style={{borderWidth:2,top:6,flexDirection:'row',backgroundColor:'brown'}}>
    <View style={{textAlign:'center',marginLeft:30,flexDirection:'row',color:"white"}}>
    {/* <Card onPress={() => props.navigation.openDrawer()} >
    <Card.Cover style={{width:30,height:30,color:"black"}} source={require("../config/list.png")}  />
  </Card> */}


    <Icon  name='menu' 
  
  color="black" size={35}onPress={() => props.navigation.openDrawer()} />
    <Text style={{fontSize:30,marginLeft:20,color:"white"}}>AF Blood Bank</Text>
      </View>
  </TouchableOpacity>
  <Card>
    <Card.Cover source={require("../config/donate.gif")}  />
  </Card>
  <Card>
    <Card.Cover source={require("../config/bloodimage2.jpg")} />
  </Card>
  <Card>
    <Card.Cover source={require("../config/cover.jpg")} />
  </Card>
  {/* <Text>{user.uid}</Text>
  <Text>{user.email}</Text> */}

  {/* <Image source={require('../config/bloodimage.jpg')} /> */}
  {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
  {/* <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} /> */}
  </>
  )
  
}
export default Home