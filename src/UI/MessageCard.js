import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import {MessagesContext} from '../Model/ViewModel';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 2,
    },
    item: {
        paddingLeft: 10,
        fontSize: 18,
    },
});

const MessageCard = ({message, navigation}) => {
    const {setMessage} = React.useContext(MessagesContext);
    const {getMember} = React.useContext(MessagesContext);
    
    console.log('value in messageCard message.member', message.member);
    //const [message, setMessage] = React.useContext(MessagesContext);
    const [memberName, setMemberName] = React.useState('');
    
    //console.log('member.id in messageCard: ', message.id);
    React.useEffect(() =>{
        const fetchMemberName = async () => {
            const memberName = await getMember(message.member);
            setMemberName(memberName);
            console.log('values of names: ', JSON.stringify(memberName));
        };
        fetchMemberName();
    }, [message.member]);
    console.log('memberName in MessageCard: ', JSON.stringify(memberName));
    
    //console.log('message value in MessageCard: ', JSON.stringify(message));
    return(
        <TouchableWithoutFeedback 
            onPress={async () => {
                setMessage(message);
                navigation.navigate('MessageDetailView', {title: message.member})}
            }>
        <View Style={styles.container}>
            <Text styles={styles.item}>{memberName}</Text>
            <Text style={styles.item}>{message.content}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default MessageCard;