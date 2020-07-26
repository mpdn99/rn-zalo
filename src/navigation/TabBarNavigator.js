import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsScreen from '../screens/ContactsScreen';
import GroupsScreen from '../screens/GroupsScreen';
import TimelineScreen from '../screens/TimelineScreen';
import MoreScreen from '../screens/MoreScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName="Messages"
            tabBarOptions={{
                activeColor:"blue",
                inactiveColor:"white",
                showLabel:false,
            }}
        >
        <Tab.Screen 
            name="Messages" 
            component={StackNavigator}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="chat-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Contacts" 
            component={ContactsScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <AntDesign name="contacts" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Groups" 
            component={GroupsScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="account-group-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Timeline" 
            component={TimelineScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="timeline-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="More" 
            component={MoreScreen}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="grid" size={size} color={color} />
                )
            }}
        />
      </Tab.Navigator>
    )
}

export default TabBarNavigator;