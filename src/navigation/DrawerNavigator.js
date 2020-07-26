import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen'

const Drawer =  createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator 
        initialRouteName="Messages" 
        screenOptions={{
            
        }}>
        <Drawer.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerLeft: (props) => {
                return (
                  <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Image
                      style={{ height: 20, width: 20, marginLeft: 10 }}
                      source={{ uri: "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"}}
                    />
                  </TouchableOpacity>
                );
              }    
            }}
        />
        <Drawer.Screen
            name="Settings" 
            component={SettingsScreen}
        />
    </Drawer.Navigator>
    )   
}

export default DrawerNavigator;
