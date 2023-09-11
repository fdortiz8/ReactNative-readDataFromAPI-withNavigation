import React from 'react';
import {View, FlatList, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './Styles';
import WorkspaceCard from './WorkspaceCard';
import {useNavigation} from '@react-navigation/native';
import {WorkspacesContext, LoginContext} from '../Model/ViewModel';

const WorkspaceView = ({navigation}) => {
    const {workspaces} = React.useContext(WorkspacesContext);
    const {logoutUser} = React.useContext(LoginContext);
    //console.log('value of workspaces inside workspaceview is: ', JSON.stringify(workspaces));
    
    const logout = async () => {
        await logoutUser();
        navigation.replace('LoginView');
    };
    
    const topBarNavigation = useNavigation();
    
    React.useLayoutEffect(() => {
        topBarNavigation.setOptions({
            headerRight: () => (
                <TouchableWithoutFeedback 
                    onPress={logout}>
                        <Text 
                        style={styles.logoutButton}
                        accessibilityLabel="logout">Logout</Text>
                </TouchableWithoutFeedback>
            ),
        }, [topBarNavigation]);
    })
    return (
        <View style={styles.card}>
            <FlatList
                data={workspaces}
                keyExtractor={item => item.id}
                accessibilityLabel='workspaces'
                renderItem={({item}) => (
                    <WorkspaceCard workspace={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default WorkspaceView;