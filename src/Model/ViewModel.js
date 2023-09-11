import React from 'react';
import {email, password} from '../UI/LoginView';

import {LOGIN} from '../Repo/LoginRepo';
import {GET_WORKSPACES} from '../Repo/WorkspaceRepo';
import {GET_CHANNELS} from '../Repo/ChannelRepo';
import {GET_MESSAGES} from '../Repo/MessageRepo';
import {GET_MEMBER} from '../Repo/MemberRepo';

export const LoginContext = React.createContext();
export const WorkspacesContext = React.createContext();
export const ChannelsContext = React.createContext();
export const MessagesContext = React.createContext();
export const MessageDetailContext = React.createContext();

const ViewModel =(props) => {
    //const [fetching, setFetching] = React.useState(false);
    const [loginResponse, setLoginResponse] = React.useState();
    const [workspaces, setWorkspaces] = React.useState([]);
    const [workspace, setWorkspace] = React.useState();
    const [channels, setChannels] = React.useState([]);
    const [channel, setChannel] = React.useState();
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState();
    const [member, setMember] = React.useState();
    
    const login = async (email, password) => {
        try {
            setLoginResponse(null);
            const loginResponse = await LOGIN(email, password);
            setLoginResponse(loginResponse);
            getWorkspaces(loginResponse);
            return loginResponse;
            //console.log("loginResponse in ViewModel = :", JSON.stringify(loginResponse));
        } catch (error) {
            console.log('Login Error:', error);
            setLoginResponse(null);
            return false;
        }
    };
    
    const logoutUser = async() => {
        try {
            setLoginResponse('');
            loginResponse('');
            // setWorkspaces('');
            // workspaces('');
            
        } catch (error) {
            console.log('Logout error: ', error);
            setLoginResponse(null);
            return false;
        }
    };
    
    const getMember = async(memberid) => {
        //try {
            //console.log('viewModel getMember', memberid )
            const memberName = await GET_MEMBER(loginResponse, memberid);
            setMember(memberName);
            console.log('value memberName in viewModel is:', memberName);
            return memberName;
        // } catch {
        //     console.log('Error getting member');
        //     setMember('');
        // }
    }
    
    const getWorkspaces = async (loginResponse) => {
        //try {
            const workspaces = await GET_WORKSPACES(loginResponse);
            setWorkspaces(workspaces);
            // console.log('value inside getworkspaces', JSON.stringify(workspaces));
        // } catch {
        //     console.log('Error getting workspaces inside the ViewModel');
        //     setWorkspaces(null);
        // }
    };
    
    React.useEffect( () => {
        const fetchChannels = async () => {
            if (workspace) {
                const channels = await GET_CHANNELS(loginResponse, workspace);
                setChannels(channels);
            }
        };
        fetchChannels();
    }, [workspace, loginResponse]);
    
    React.useEffect( () => {
        const fetchMessages = async () => {
            if (channel) {
                const messages = await GET_MESSAGES(loginResponse, channel);
                setMessages(messages);
                //console.log('value of messages in ViewModel: ', messages);
            }
        };
        fetchMessages();
    }, [channel, loginResponse]);
    
    
    return (
        <LoginContext.Provider value={{ loginResponse, login, logoutUser }}>
            <WorkspacesContext.Provider value={{ workspaces, workspace, setWorkspace, logoutUser}}>
                <ChannelsContext.Provider value={{channels, channel, setChannel}}>
                    <MessagesContext.Provider value={{messages, message, setMessage, getMember}}>
                        {/* <MessageDetailContext.Provider value={{}}> */}
                            {props.children}
                        {/* </MessageDetailContext.Provider> */}
                    </MessagesContext.Provider>
                </ChannelsContext.Provider>
            </WorkspacesContext.Provider>
        </LoginContext.Provider>
        
    );
};

export default ViewModel;