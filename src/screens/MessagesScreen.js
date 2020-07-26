import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import messages from '../data/messages.json';
import MessageCard from '../components/MessageCard'

const MessagesScreen = (props) => {
    return(
        <View>
            <FlatList keyExtractor={item => item.id.toString()} data={messages} renderItem={({item}) => {
                return(
                    <MessageCard data={item} onGoToConversation={props.navigation.navigate}/>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default MessagesScreen;
