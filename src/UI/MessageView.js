import React from 'react';
import {View, FlatList, TouchableWithoutFeedback, Text} from 'react-native';

import styles from './Styles';
import MessageCard from './MessageCard';
import {MessagesContext} from '../Model/ViewModel';
import {useNavigation} from '@react-navigation/native';

const MessageView = ({navigation}) => {
    const {messages} = React.useContext(MessagesContext);
    
    const reset= () => {
        console.log('todo');
    };
    
    const addMessage = () => {
        navigation.navigate('AddMessageView');
    };

    
    React.useEffect( () => {
        navigation.setOptions({
            headerRight: ()=> (
                <View style={{ flexDirection: 'row', alignItems: 'right'}}>
                    <TouchableWithoutFeedback
                        onPress={reset}>
                        <Text style={styles.topButton} accessibilityLabel='reset'>Reset</Text>      
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={addMessage}>
                        <Text style={styles.topButton} accessibilityLabel='add message'>Add</Text>
                    </TouchableWithoutFeedback>
                </View>
            ),
        });
    }, [navigation]);
    
    return(
        <View style={styles.card}>
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                accessibilityLabel='messages'
                renderItem={({item}) => (
                    <MessageCard message={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default MessageView;