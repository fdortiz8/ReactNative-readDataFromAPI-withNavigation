import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import {WorkspacesContext} from '../Model/ViewModel';

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

const WorkspaceCard = ({workspace, navigation }) => {
    const { setWorkspace } = React.useContext(WorkspacesContext);
    return (
        <TouchableWithoutFeedback 
            onPress={async () => {
                setWorkspace(workspace);
                navigation.navigate('ChannelView', {title: workspace.name})}
            }>
            <View style={styles.container}>
                <Text style={styles.item}>{workspace.name}</Text>    
            </View>  
        </TouchableWithoutFeedback>  
    );
};

export default WorkspaceCard;