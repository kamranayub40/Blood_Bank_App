import React,{useState,useEffect} from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
// import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
// import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
// import { Icon } from 'react-native-elements'

// import Home from '../Screens/home'
// import Sidebar from '../Screens/sidebar'
// // import { color } from 'react-native-reanimated';
// import Recipant from '../Screens/recipent'
// import Donor from '../Screens/donor' 
// import Rigistration from '../Screens/DonorRigistration'
// import Login from '../Screens/login'
// import Card from '../Screens/RecipantCard'
// import ONeagtive from '../Screens/ONegative'
// import A from '../Screens/A'
// import B from '../Screens/B'
// import ABPositive from '../Screens/ABPositive'
// import ABNegative from '../Screens/ABNegative'
// import ANegative from '../Screens/ANegative'
// import BNegative from '../Screens/BNegative'
// import Sign from '../Screens/Sign'
// import AuthContext from './Auth'
// import onbordingui from './onbordingui'
// import Login from '../Screens/Login'
// import Login from '../Screens/Login'
import onbordingui from '../config/onbordingui'
import Login from '../Screens/Login'
import Sign from '../Screens/Sign'
// import user_profile from '../Screens/User_Profile'
import AsyncStorage from '@react-native-community/async-storage'
// import onbordingui from './onbordingui'


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

  headerShown: false
}


)
// function DonorStack(){
//   return(

//   <Stack.Navigator initialRouteName="donor">
//     <Stack.Screen name="donor" options={navigationhandel} component={Donor}/>
//     <Stack.Screen name="DonorRigistration" options={navigationhandel}  component={Rigistration}/>
//   </Stack.Navigator>
//   )

// }

// function RecipantStack(){
//   return(

//   <Stack.Navigator initialRouteName="recipent">
//     <Stack.Screen name="recipent" options={navigationhandel} component={Recipant}/>
//     <Stack.Screen name="ONegative" options={navigationhandel} component={ONeagtive}/>
//     <Stack.Screen name="A" options={navigationhandel} component={A}/>
//     <Stack.Screen name="B" options={navigationhandel} component={B}/>
//     <Stack.Screen name="ABPositive" options={navigationhandel} component={ABPositive}/>
//     <Stack.Screen name="ABNegative" options={navigationhandel} component={ABNegative}/>
//     <Stack.Screen name="ANegative" options={navigationhandel} component={ANegative}/>
//     <Stack.Screen name="BNegative" options={navigationhandel} component={BNegative}/>






//     <Stack.Screen name="Card" options={navigationhandel}  component={Card}/>
//   </Stack.Navigator>
//   )

// }
// function LoginStack(){
//   return(
//     <Stack.Navigator   initialRouteName="login">
//       <Stack.Screen options={navigationhandel}   name="login"component={Login}/>
//       <Stack.Screen options={navigationhandel}   name="Sign"component={Sign}/>

//     </Stack.Navigator>
//   )
// }

// const Stack=createStackNavigator()
// const Drawer=createDrawerNavigator()
// const navigationhandel=()=>({

//     headerShown: false
//   }
// )

function Navigation(){
  const [fristLounchstate,setFristLaounchState]=useState(null)
  let routeName
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
        if(value==null){
          AsyncStorage.setItem('alreadylaunched','true')
        setFristLaounchState(true)
        }
        else{
          setFristLaounchState(false)
        }
    })

  },[])  
  if(fristLounchstate==null){
    return <Text> <ActivityIndicator size="large" color="teal"/></Text>
  }else if(fristLounchstate==true){
    routeName="onbordingui"
  }else{
      routeName= "Login"
  
    }
  
  return(
    <>
    <Stack.Navigator initialRouteName={routeName} >
          <Stack.Screen options={navigationhandel} name="onbordingui" component={onbordingui}/>
          <Stack.Screen options={navigationhandel}   name="Login"component={Login}/>
          <Stack.Screen options={navigationhandel}   name="Sign"component={Sign}/>

          {/* <Stack.Screen options={navigationhandel}   name="user_profile"component={user_profile}/> */}

      </Stack.Navigator>

  
     

    
    
    
{/*         
      <NavigationContainer initialRouteName={LoginStack}>
          
        <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
         
       
          <Drawer.Screen name="Home"options={{drawerLabel:"HOME"  , drawerIcon: ({ name, size,color }) => (
    <Icon  name='home'
     color="black" size={24} 
    />)} }  component={Home}  />
          <Drawer.Screen name="Login" component={LoginStack}  />

          <Drawer.Screen name="Donor"options={{drawerLabel:"DONATE"  , drawerIcon: ({ name, size,color }) => (
    <Icon  name='plus'
    type='font-awesome' color="red" size={24} 
    />)} }  component={DonorStack} />
          <Drawer.Screen  name="Recipant" options={{drawerLabel:"RECIPANT"  , drawerIcon: ({ name, size,color }) => (
    <Icon  name='receipt'
    type='font-awesome-5' color="red" size={24} 
    />)} }   component={RecipantStack} />
         
      





        </Drawer.Navigator>
      </NavigationContainer> */}

    </>
  
    
    
    )

}
export default Navigation