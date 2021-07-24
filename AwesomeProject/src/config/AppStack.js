import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
import { colors, Icon } from 'react-native-elements'

// import Sidebar from '../components/sidebar'
// // import Sidebar from '../components/sidebar'
// // import Sidebar from '../components/Sidebar'
// import Sidebar from '../components/Sidebar'
// // import {AuthContext} from './Auth'
// import Home from '../components/Home'
// // import { Icon } from 'react-native-vector-icons/Icon';
// import { Icon } from 'react-native-elements'
// import { color } from 'react-native-reanimated';
// // import Product from '../components/product'
// import Product from '../components/product'
// import Search from '../components/Search';
// import CardDetail from '../components/CardDetail';
// // const Stack=createStackNavigator()
// import Home from '../Screens/home'
// import Home from '../Screens/Home'
import Home from '../Screens/Home'
import Sidebar from '../Screens/sidebar'
// import user_profile from '../Screens/User_Profile'
import Donor from '../Screens/donor'
import Recipant from '../Screens/recipent'
import Rigistration from '../Screens/DonorRigistration'
import Card from '../Screens/RecipantCard'
import ONeagtive from '../Screens/ONegative'
import A from '../Screens/A'
import B from '../Screens/B'
import ABPositive from '../Screens/ABPositive'
import ABNegative from '../Screens/ABNegative'
import ANegative from '../Screens/ANegative'
// import User_Profile from '../Screens/User_Profile'
import User_Profile from '../Screens/User_Profile'
import BNegative from '../Screens/BNegative'
import FormButton from '../Screens/formButton'
import {AuthContext} from '../config/Auth'
const Drawer = createDrawerNavigator();


const Stack = createStackNavigator();

// export const SearchStack=()=>{
//   return(
//     <Stack.Navigator initialRouteName="Search">
//       <Stack.Screen name="Search" component={Search}/>
//     </Stack.Navigator>
//   )
function UserProfileStack(){

    return(
        <Stack.Navigator initialRouteName="User_Profile">
      <Stack.Screen options={navigationhandel}   name="User_Profile" component={User_Profile}/>


    </Stack.Navigator>
    )
}
function DonorStack(){
  return(

    <Stack.Navigator initialRouteName="donor">
    <Stack.Screen options={navigationhandel} name="donor" component={Donor}/>
     <Stack.Screen name="DonorRigistration" options={navigationhandel}  component={Rigistration}/>

  </Stack.Navigator>
    )
}
function RecipantStack(){
  return(

  <Stack.Navigator initialRouteName="recipent">
    <Stack.Screen name="recipent" options={navigationhandel} component={Recipant}/>
    <Stack.Screen name="ONegative" options={navigationhandel} component={ONeagtive}/>
    <Stack.Screen name="A" options={navigationhandel} component={A}/>
    <Stack.Screen name="B" options={navigationhandel} component={B}/>
    <Stack.Screen name="ABPositive" options={navigationhandel} component={ABPositive}/>
    <Stack.Screen name="ABNegative" options={navigationhandel} component={ABNegative}/>
    <Stack.Screen name="ANegative" options={navigationhandel} component={ANegative}/>
    <Stack.Screen name="BNegative" options={navigationhandel} component={BNegative}/>






    <Stack.Screen name="Card" options={navigationhandel}  component={Card}/>
  </Stack.Navigator>
  )

}


function HomeStack() {
  return (
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen options={navigationhandel} name="Home" component={Home} />
      <Stack.Screen options={navigationhandel} name="Sidebar" component={Sidebar} />
      {/* <Stack.Screen options={navigationhandel} name="donor" component={Donor} /> */}


      {/* <Stack.Screen options={navigationhandel}   name="user_profile"component={user_profile}/> */}

      
    </Stack.Navigator>
  );
}
const navigationhandel=()=>({
  
  headerShown: false
}
)
const AppStack=()=>{
  const {logout}=useContext(AuthContext)
  // const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>} >
         
       
    <Drawer.Screen name="HomeStack"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"HOME"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="home" color="red" size={24} 
    />)} } component={HomeStack}  />
    <Drawer.Screen name="DonorStack"  options={{drawerLabel:"DONATE"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="plus" type="font-awesome" color="red" size={24} 
    />)} } component={DonorStack}  />
    <Drawer.Screen name="RecipantStack"  options={{drawerLabel:"RECIPANT"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="hand-holding-medical" type="font-awesome-5" color="red" size={20} 
    />)} } component={RecipantStack}  />
    <Drawer.Screen name="UserProfileStack"  options={{drawerLabel:"User_Profile"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="user" type="font-awesome-5" color="red" size={20} 
    />)} } component={UserProfileStack}  />
    
     {/* <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} /> */}
    {/* <Drawer.Screen name="user_profile"  options={{drawerLabel:"Profile"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="user" type="fontawesome" color="black" size={24} 
    />)} } component={user_profile}  /> */}
    
    {/* <Drawer.Screen name="Product" component={Product}  /> */}
    {/* <Drawer.Screen name="Search" component={Search}  /> */}


    
   






  </Drawer.Navigator>
    )

}
export default AppStack  