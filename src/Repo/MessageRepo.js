export const GET_MESSAGES = async (loginResponse, channel) => {
    //try {
        //console.log('value of loginResponse in GET_MESSAGES: ', JSON.stringify(loginResponse.accessToken));
        //console.log('value of channel.id in GET_MESSAGES ', JSON.stringify(channel.id));
        const response = await fetch(`https://cse118.com/api/v2/channel/${channel.id}/message`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization : `Bearer ${loginResponse.accessToken}`,
            },
        });
        // if(!response.ok) {
        //     throw new Error('Error getting messages in GET_MESSAGES');
        // }
        const messages = await response.json();
        //console.log('value of returned messages in GET_MESSAGES: ', JSON.stringify(messages));
        return messages;
    // } catch (error){
    //     console.error('Error: ', error);
    //     throw error;
    // }
};