import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConversationScreen from '../screens/ConversationScreen';
import { Image } from 'react-native';
import MessagesScreen from '../screens/MessagesScreen';
import DrawerNavigator from './DrawerNavigator';


const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: '100%' ,flex: 1 }}
        source={require('../../assets/unnamed.jpg')}
      />
    );
  }

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Messages"
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#0068ff',
                },
                headerTitle: "",
                headerBackground: (props) => <LogoTitle {...props}/>
                
            }}
        >
            <Stack.Screen
                name="Messages"
                component={DrawerNavigator}
            />
            <Stack.Screen
                name="Conversation"
                component={ConversationScreen}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;