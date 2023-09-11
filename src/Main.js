import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginView from './UI/LoginView';
import WorkspaceView from './UI/WorkspaceView';
import ChannelView from './UI/ChannelView';
import MessageView from './UI/MessageView';
import MessageDetailView from './UI/MessageDetailView';
import AddMessageView from './UI/AddMessageView';
import ViewModel from './Model/ViewModel';

const Stack = createStackNavigator();


const Main = () => {
    return (
        <ViewModel>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="LoginView"
                        component={LoginView}
                    />
                    <Stack.Screen 
                        name="WorkspaceView"
                        component={WorkspaceView}
                        options={() => ({
                            title: "Workspaces",
                            headerBackTitle: 'Login',
                            headerBackAccessibilityLabel: 'back to login'
                        })}
                    />
                    <Stack.Screen
                        name="ChannelView"
                        component={ChannelView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Workspaces',
                            headerBackAccessibilityLabel: 'back to workspaces'
                        })}
                    />
                    <Stack.Screen
                        name="MessageView"
                        component={MessageView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Channels',
                            headerBackAccessibilityLabel: 'back to workspace',
                            accessibilityLabel: 'back to channel'
                        })}
                    />
                    <Stack.Screen
                        name="MessageDetailView"
                        component={MessageDetailView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Messages',
                            headerBackAccessibilityLabel: 'back to channel'
                        })}
                    />
                    <Stack.Screen
                        name="AddMessageView"
                        component={AddMessageView}
                        // options={({route}) => ({
                        //     title: route.params.title,
                        //     headerBackTitle: "Channel",
                        //     headerBackAccessibilityLabel: 'back to channel',
                        // })}
                    />
                </Stack.Navigator>
            </NavigationContainer> 
        </ViewModel>
    );
};

export default Main;