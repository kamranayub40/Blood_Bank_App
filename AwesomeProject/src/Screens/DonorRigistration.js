import { useLinkProps } from '@react-navigation/native'
import React, { useState } from 'react'
import {View,TextInput,Button,TouchableOpacity,Picker,Text, StyleSheet ,ScrollView,SafeAreaView,KeyboardAvoidingView} from 'react-native'
import { Icon } from 'react-native-elements'
import database from '@react-native-firebase/database'
import { Card } from 'react-native-paper';


function Rigistration(props){
  const [name,setName]=useState()
  const [Fathername,setFathername]=useState()
  const[mobiNbr,setMobinbe]=useState()
  const[PerminentAddress,setPerminentAddress]=useState()
  const[gender,setGender]=useState()
  const[province,setProvince]=useState()
  const[BloodGroup,setBloodGroup]=useState()
  const[CBC,setcbc]=useState()
  const[ECR,setECR]=useState()
  const[MP,setMp]=useState()
  const[HPBV,setHPBV]=useState()
  const[HPCV,setHPCV]=useState()
  const[ADIS,setADIS]=useState()
  const[VDRL,setVDRL]=useState()
  const [selectedValue, setSelectedValue] = useState();





  const donate=()=>{
  let user={
      name:name,
      Fathername:Fathername,
      mobiNbr:mobiNbr,
      PerminentAddress:PerminentAddress,
      gender:gender,
      province:province,
      BloodGroup:BloodGroup,
      CBC:CBC,
      ECR:ECR,
      MP:MP,
      HPBV:HPBV,
      HPCV:HPCV,
      ADIS:ADIS,
      VDRL:VDRL
      
    }
    database().ref('/').child('user').push(user)
    console.log(user)
    setName("")
    setFathername("")
    setMobinbe("")
    setPerminentAddress("")
    setGender("")
    setProvince("")
    setBloodGroup("")
    setcbc("")
    setECR("")
    setMp("")
    setHPBV("")
    setHPCV("")
    setADIS("")
    setVDRL("")
       

  }
    return( 
      <>
      
  
        <TouchableOpacity style={{borderWidth:0,top:1,flexDirection:'row',backgroundColor:'white'}}>
        <View style={{textAlign:'center',marginLeft:47,flexDirection:'row',color:"white"}}>
        <Icon  name='arrow-left' 
  
  color="black" size={35}  onPress={() => props.navigation.navigate("donor")} />
   



        <Text style={{fontSize:30,marginLeft:20,color:"black"}}>RIGISTRATION</Text>
          </View>
      </TouchableOpacity>
      <View style={styles.personol}>
        <Text style={{fontSize:20,textAlign:"center",color:"white"}}>Personal info</Text>
      </View>
      <View style={{flex:1,height:100}}>
          <ScrollView  behaviour = "height"
                keyboardVerticalOffset = {64}
                style= {{ marginTop: '2%',}}>
            <TextInput style={styles.input} value={name} onChangeText={(name)=>setName(name)} placeholder="Enter your Fullname"/>
            <TextInput style={styles.input}value={Fathername} onChangeText={(Fathername)=>setFathername(Fathername)} placeholder="Enter your Fathername"/>
            <TextInput style={styles.input} value={mobiNbr} onChangeText={(mobiNbr)=>setMobinbe(mobiNbr)} placeholder="Enter your Mobile Nbr"/>
            <TextInput style={styles.input} value={PerminentAddress} onChangeText={(PerminentAddress)=>setPerminentAddress(PerminentAddress)} placeholder="Enter your Perminent Address "/>
            <TextInput style={styles.input} value={gender} onChangeText={(gender)=>setGender(gender)} placeholder="Enter your gender"/>
            <TextInput style={styles.input} value={province} onChangeText={(province)=>setProvince(province)} placeholder="Enter your province"/>
            <View style={styles.personol}>
        <Text style={{fontSize:20,textAlign:"center",color:"white"}}>Required Test</Text>
      </View>
      {/* <TextInput style={styles.input} value={BloodGroup} onChangeText={(BloodGroup)=>setBloodGroup(BloodGroup)} placeholder="Enter your Blood group"/> */}
      <View style={styles.container}>

      <Picker
        selectedValue={BloodGroup}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
        >
        <Picker.Item label="BloodGroup" value="0" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B-" value="B-" />


      </Picker>
          </View>
      
      <TextInput style={styles.input} value={CBC} onChangeText={(CBC)=>setcbc(CBC)} placeholder="Test CBC"/>
      <TextInput style={styles.input} value={ECR} onChangeText={(ECR)=>setECR(ECR)} placeholder="Test ESR"/>
      <TextInput style={styles.input} value={MP} onChangeText={(MP)=>setMp(MP)} placeholder="Test MP"/>
      <TextInput style={styles.input} value={HPBV} onChangeText={(HPBV)=>setHPBV(HPBV)} placeholder="Test HPBV"/>
      <TextInput style={styles.input} value={HPCV} onChangeText={(HPCV)=>setHPCV(HPCV)} placeholder="Test HPCV"/>
      <TextInput style={styles.input} value={ADIS} onChangeText={(ADIS)=>setADIS(ADIS)} placeholder="Test ADIS"/>
      <TextInput style={styles.input} value={VDRL} onChangeText={(VDRL)=>setVDRL(VDRL)} placeholder="Test VDRL"/>
<TouchableOpacity style={{borderWidth:2,borderRadius:30,width:130,marginLeft:100,backgroundColor:"darkred"}} onPress={donate}>
  <Text style={{textAlign:"center",fontSize:27,color:'white'}}>
    DONATE
  </Text>
</TouchableOpacity>
</ScrollView>
</View>
    </>
    )
}
const styles=StyleSheet.create({
  input:{
    flex:1,
    borderColor:"teal",
    borderRadius:30,
    borderWidth:2,
    marginBottom:6,
    

  },
  personol:{
    borderWidth:2,
    marginTop:20,
    backgroundColor:"darkred",
    borderRadius:16,marginTop:2
  },
    container: {
      flex: 1,
      paddingTop: 4,
      // alignItems: "center",
      borderWidth:1,
      borderRadius:25,
      marginBottom:5,
      borderColor:"teal"
    },  
  
})
export default Rigistration