import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import ViewModel,{ LoginContext} from '../Model/ViewModel';


const LoginView = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fetching, setFetching] = React.useState(false);
    // const [loginResponse, setLoginResponse] = React.useState();
    
    const {login} = useContext(LoginContext);
    const navigation = useNavigation();
    
    const doLogin = async () => {
        setFetching(true);
        const loginSuccessful = await login(email, password);
        setFetching(false);
        //console.log('value returned to loginView for loginSuccessful: ', loginSuccessful);
        if (loginSuccessful.accessToken != null) {
            navigation.navigate('WorkspaceView', {title: 'Workspaces'});
        }
        
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title}> Login</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeHolder="email"
                accessibilityLabel="email"
                value={email}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeHolder="password"
                value={password}
                accessibilityLabel="password"
                secureTextEntry
            />
            <Button 
                accessibilityLabel="login"
                title="login"
                onPress={doLogin} 
                />
        </View>
    );
};

export default LoginView;



// setFetching(true);
//         fetch('https://cse118.com/api/v2/login', {
//             method: 'POST',
//             headers: {
//                 Accept : 'application/json',
//                 'Content-Type' : 'application/json',
//             },
//             body: JSON.stringify({
//                 email: email, 
//                 password: password 
//             }),
//         })
//             .then(response => {
//                 return response.json();
//             })
//             .then(loginResponse => {
//                 setFetching(false);
//                 setLoginResponse(loginResponse);
//             })
//             .catch(error => {
//                 console.error('Error: ', error);
//                 setFetching(false);
//             });
        
//         if (loginResponse != null) {
//             console.log("the value of atoken inside navigate section: ", JSON.stringify(loginResponse));
//             navigation.navigate('WorkspaceView');
//         }