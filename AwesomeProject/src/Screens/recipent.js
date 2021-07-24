import React from 'react'
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import database from '@react-native-firebase/database'
import { Card } from 'react-native-paper';



function Recipant(props,name){

  return(
      <>
    <TouchableOpacity style={{borderWidth:2,top:6,flexDirection:'row',backgroundColor:'white'}}>
    <View style={{textAlign:'center',marginLeft:30,flexDirection:'row',color:"white"}}>
    <Icon  name='arrow-left' 
  
  color="black" size={35}onPress={() => props.navigation.navigate("Home")} />
   
 


    {/* <Icon name="arrow-left" type="fontawesome" color="white" size={35}onPress={() => props.navigation.navigate("Home")} /> */}
    <Text style={{fontSize:30,marginLeft:50,color:"black"}}>RECIPANT</Text>
      </View>
  </TouchableOpacity>
   <View style={styles.mainCard}>
   {/* <ScrollView>
       <KeyboardAvoidingView>    */}
           <TouchableOpacity style={styles.cardbutton}  onPress={()=>props.navigation.navigate("ONegative")}><Text style={styles.cardText}>O-</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("Card")}><Text style={styles.cardText}>O+</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("A")}><Text style={styles.cardText}>A</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("B")}><Text style={styles.cardText}>B</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("ABPositive")}><Text style={styles.cardText}>AB+</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("ABNegative")}><Text style={styles.cardText}>AB-</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton} onPress={()=>props.navigation.navigate("ANegative")}><Text style={styles.cardText}>A-</Text></TouchableOpacity>
           <TouchableOpacity style={styles.cardbutton}onPress={()=>props.navigation.navigate("BNegative")}><Text style={styles.cardText}>B-</Text></TouchableOpacity>
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
export default Recipant