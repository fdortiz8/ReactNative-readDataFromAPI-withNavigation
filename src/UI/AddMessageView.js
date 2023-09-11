import React, {useState, useContext} from 'react';
import {View, TouchableWithoutFeedback, Text, Button, TextInput} from 'react-native';
import styles from './Styles';


const AddMessageView = ({navigation}) => {
    // const {addNewMessage} = useContext(MessagesContext);
    const [newMessage, setNewMessage] = React.useState('');
    const [running, setRunning] = React.useState(false);
    
    const addMessage = async() => {
        setRunning(true);
        //const addMessageSuccesful = await addNewMessage(newMessage);
        setFetching(false);
        
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title}>New Message</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setNewMessage}
                placeHolder="new message"
                accessibilityLabel="newMessage"
                value={newMessage}
            />
            <Button 
                accessibilityLabel="add message"
                title="add message"
                onPress={addMessage} 
            />
        </View>
    );
};

export default AddMessageView;
