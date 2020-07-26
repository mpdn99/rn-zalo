import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native'

const MessageCard = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => props.onGoToConversation('Conversation', { ...props.data })}
                style={styles.touch}
            >
                <View>
                    <Image style={styles.img} source={{ uri: props.data.avatar_url }}/>
                </View>
                <View style={{width:'80%', marginLeft: 8}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.nameText}>{props.data.first_name}</Text>
                        <Text style={{textAlign:'left'}}>{props.data.last_message_date}</Text>
                    </View>
                    <Text style={styles.msgText} numberOfLines={2}>{props.data.last_message_content}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        padding: 8
    },
    touch:{
        height: 80,
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        backgroundColor:'#F0F0F0'
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow:'hidden',
        borderWidth: 0.5,
        borderColor:'black'
    },
    nameText: {
        fontWeight:'bold',
        marginBottom: 3,
        fontSize: 15
    },
})


export default MessageCard;