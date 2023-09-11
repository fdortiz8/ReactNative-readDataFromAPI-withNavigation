import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

// import MessageDetailCard from './MessageDetailCard';
import {MessagesContext } from '../Model/ViewModel';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
    },
    item: {
        paddingLeft: 10,
        fontSize: 18,
    },
    tinyDate: {
        fontSize: 10,
        textAlign: 'right',
    },
});

const MessageDetailView = () => {
    const {message} = React.useContext(MessagesContext);
    console.log('value inside MessageDetailView of message: ', JSON.stringify(message));
    return(
        <View style={styles.container}>
            <Text style={styles.item}>{message.content}</Text>
            <Text style={styles.tinyDate}>{message.posted}</Text>
        </View>
    );
};

export default MessageDetailView;