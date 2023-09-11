import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import {ChannelsContext} from '../Model/ViewModel';

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

const ChannelCard = ({channel, navigation}) => {
    const {setChannel} = React.useContext(ChannelsContext);
    return(
        <TouchableWithoutFeedback 
            onPress={async () => {
                setChannel(channel);
                navigation.navigate('MessageView', {title: channel.name})}
            }>
        <View Style={styles.container}>
            <Text style={styles.item}>{channel.name}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default ChannelCard;