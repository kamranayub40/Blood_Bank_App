import React, { useState } from 'react'
import {Text,TouchableOpacity,View,StyleSheet, KeyboardAvoidingView} from 'react-native'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rigistration from '../Screens/DonorRigistration'
import { Card } from 'react-native-paper';
const Stack = createStackNavigator();
// function Root() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Rigistration" component={Rigistration} />
//       </Stack.Navigator>
//     );
//   }

function Donor(props){
    
    
    // const root=()=>{
    
     <NavigationContainer>
    <Stack.Screen name="Registration" component={Rigistration}/>
    </NavigationContainer> 
    // }
    // const[current, setCurrent]=useState('donor')
   
  return(
      <>
      
       
    <TouchableOpacity style={{borderWidth:2,top:6,flexDirection:'row',backgroundColor:'white'}}>
    <View style={{textAlign:'center',marginLeft:70,flexDirection:'row',color:"white"}}>
    <Icon  name='arrow-left' 
  
  color="black" size={35}onPress={() => props.navigation.navigate("Home")} />
   
 


    <Text style={{fontSize:30,marginLeft:20,color:"black"}}>DONATE</Text>
      </View>
  </TouchableOpacity>
  <View style={styles.mainCard}>
    {/* <ScrollView>
        <KeyboardAvoidingView>    */}
            <TouchableOpacity style={styles.cardbutton}  onPress={() => props.navigation.navigate("DonorRigistration")} ><Text style={styles.cardText}>O-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton} onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>O+</Text></TouchableOpacity>
            
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>A</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>B</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>AB+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>AB-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>A-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardbutton}onPress={() => props.navigation.navigate("DonorRigistration")}><Text style={styles.cardText}>B-</Text></TouchableOpacity>
        {/* </KeyboardAvoidingView>

    </ScrollView> */}


  </View>
  </>
  )
}
const styles=StyleSheet.create({
    mainCard:{
        // borderWidth:1,
        // top:50,
        // width:380,
        // height:550
    },
    cardbutton:{
        top:60,
        textAlign:"center",
        backgroundColor:"coral",
        width:360,height:60,
        color:"red",
        borderColor:"red",
        borderWidth:1,
       
    borderRadius:70,
    marginBottom:4

    },
    cardText:{
        textAlign:"center",
        marginBottom:20,
        fontSize:36,color:"white"
    }

})
export default Donor