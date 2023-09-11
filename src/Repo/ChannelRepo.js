export const GET_CHANNELS = async (loginResponse, workspace) => {
    //try {
        //console.log('value of loginResponse in GET_CHANNELS: ', JSON.stringify(loginResponse.accessToken));
        //console.log('value of workspace in GET_CHANNELS ', JSON.stringify(workspace.id));
        const response = await fetch(`https://cse118.com/api/v2/workspace/${workspace.id}/channel`, {
            method: 'GET',
            headers: {
                Accept : 'application/json',
                Authorization : `Bearer ${loginResponse.accessToken}`,
            },
        });
        // if (!response.ok) {
        //     throw new Error('Error getting channels in GET_CHANNELS');
        // }
        const channels = await response.json();
        return channels;
    // } catch (error) {
    //     console.error('Error: ', error);
    //     throw error;
    // }
};