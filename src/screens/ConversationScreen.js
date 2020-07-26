import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

const ConversationScreen = ({route}) => {
    const propsFromMessage = route.params;
    return(
        <View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image
                    source={{ uri: propsFromMessage.avatar_url}}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                    <Text style={{fontWeight:'bold', margin: 20, fontSize: 20}}>{route.params.first_name} {route.params.last_name}</Text>
                    <Text style={{ margin: 20 }}>{route.params.last_message_content}</Text>
            </ScrollView>
            <TouchableOpacity style ={{ 
                backgroundColor: '#0068ff', 
                width: 100, 
                height: 50, 
                borderRadius:10, 
                alignSelf:'center'}}
            >
                <Entypo name="reply" size={24} color="white" style={{ alignSelf:'center'}} />
                <Text style={{ textAlign:'center', color:'white' }}>Reply</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    }
})


export default ConversationScreen;