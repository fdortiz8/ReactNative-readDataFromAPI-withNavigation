import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './Styles';
import ChannelCard from './ChannelCard';
import {ChannelsContext} from '../Model/ViewModel';

const ChannelView = ({navigation}) => {
    const {channels} = React.useContext(ChannelsContext);
    
    return(
        <View style={styles.card}>
            <FlatList
                data={channels}
                keyExtractor={item => item.id}
                accessibilityLabel='channels'
                renderItem={({item}) => (
                    <ChannelCard channel={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default ChannelView;