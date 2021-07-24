import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../Screens/RecipantCard'
const Stack = createStackNavigator();
function Stack(){
    return(
        <Stack.navigator>
            <Stack.screen name="RecipantCard" component={Card}/>
        </Stack.navigator>
    )
}
export default Stack