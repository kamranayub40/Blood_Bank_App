import React from 'react'
import {View,Text,Button,TouchableOpacity,Image} from 'react-native'
// import { AntDedign } from 'react-native-vector-icons'
import Onboarding from 'react-native-onboarding-swiper';
// import { IconFill, IconOutline } from "@ant-design/icons-react-native";


function onbordingui(props){
    return(
        
        <Onboarding
        onSkip={()=>props.navigation.navigate("Login")}
        onDone={()=>props.navigation.navigate("Login")}

        pages={[
          {
            backgroundColor: 'darkred',
            image: <Image source={require('../config/bloodDonate3.gif')} />,
            title: 'BLOOD DONATE',
            subtitle: 'Match your antigens and Donate',
          },
          {
            backgroundColor: 'teal',
            image: <Image source={require('../config/recipent.jpg')} />,
            title: 'Recieved Blood',
            subtitle: 'Match your Group and recieved blood',
          },
          {
            backgroundColor: 'teal',
            image: <Image source={require('../config/antigens3.jpg')} />,
            title: 'ANTIGENS',
            subtitle: 'Antigens of blood group who donate',
          },
          {
            backgroundColor: 'green',
            // image: <Image source={require('../images/onb2.jpg')} />,
            title: 'WELLCOME TO',
            subtitle: 'ACHAR FOUNDATION BLOOD BANK',
          },
        
        ]}
      />
    )
}
export default onbordingui