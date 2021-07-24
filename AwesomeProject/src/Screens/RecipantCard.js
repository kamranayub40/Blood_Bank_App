import React, { useState } from 'react'
import {Text,TouchableOpacity,View,Button,FlatList} from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import database from '@react-native-firebase/database'
import { State } from 'react-native-gesture-handler'
import { Value } from 'react-native-reanimated'


  
  function Card(props){
    const[arr ,setState]=useState()
    const[arr2 ,setState2]=useState()

    database().ref('user').orderByChild('BloodGroup').once('value', snapshot => {
      var arr=[]
      // var arr2=[]
      snapshot.forEach((BloodGroup)=>{
        const state=BloodGroup.val()
        const state2=BloodGroup.val()
        
        if(state2.BloodGroup=="O+" ){
            // console.log(state2)
            // console.log(arr)
         
          return  arr.push(state)
          
          
        }
        if(state2.BloodGroup=="A+" ){
          
        return  arr.push(state2)
        
        
      }
      if(state2.BloodGroup=="B+" ){
          
        return  arr.push(state2)
        
        
      }
      if(state2.BloodGroup=="AB+" ){
          
        return  arr.push(state2)
        
        
      }
      if(state2.BloodGroup=="O+" ){
          
        return  arr.push(state2)
        
        
      }
      
      
      })
      return setState(arr)
    }).catch((Err)=>{console.log(Err,"Net Error")})
    // console.log(arr)
  
  return(
    <>
    
    <TouchableOpacity style={{borderWidth:2,top:6,flexDirection:'row',backgroundColor:'white'}}>
    <View style={{textAlign:'center',marginLeft:30,flexDirection:'row',color:"white"}}>
    {/* <Card onPress={() => props.navigation.navigate("recipent")}  >
    <Card.Cover style={{width:30,height:30,color:"black"}} source={require("../config/arrow.png")}  />
  </Card> */}


<Icon  name='arrow-left' 
  
  color="black" size={35}  onPress={() => props.navigation.navigate("recipent")} />
    {/* <Icon  name='ios-american-football'
  type='ionicon'
  color="black" size={35}onPress={() => props.navigation.navigate("recipent")} /> */}
    <Text style={{fontSize:30,marginLeft:50,color:"black"}}>RECIPANT O+</Text>
      </View>
  </TouchableOpacity> 
  
 
  <View style={{borderWidth:2,top:50,height:580,backgroundColor:"darkred",}}>
  
  
                <FlatList
                    data={arr}
                    
                    
                    renderItem={({ item}) => {
                      
                      
                      
                      return  <View style={{marginHorizontal:20 ,borderWidth:2,}}><View  style={{fontSize:20,color:"white",flex:1}}>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>Name:{item.name}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>S/O:{item.Fathername}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>BloodGroup:{item.BloodGroup}</Text>
                      <Text style={{fontSize:20,color:"white" ,borderWidth:1}}>Qualification:{item.Qualification}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>Mobile:{item.mobiNbr}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>CurrentAddress:{item.CurrentAddress}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>Gender:{item.gender}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>CBC:{item.CBC}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>ECR:{item.ECR}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>MP:{item.MP}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>HPBV:{item.HPBV}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>HPCV:{item.HPCV}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>ADIS:{item.ADIS}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>VDRL:{item.VDRL}</Text>
                      <Text style={{fontSize:20,color:"white",borderWidth:1}}>province:{item.province}</Text>


                       </View></View>}
                       
                        
                        
                        
                      }
                      keyExtractor={(item) => item.id}
                      
                      extraData={arr}
                      
                    
                      
                />
                
            
  </View>
               
  </>

  )
}
export default Card