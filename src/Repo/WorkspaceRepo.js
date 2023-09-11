import ViewModel from '../Model/ViewModel';

export const GET_WORKSPACES = async (loginResponse) => {
    //console.log('val loginResponse in GET_WORKSPACES:', loginResponse.accessToken);
    //try {
        const response = await fetch(`https://cse118.com/api/v2/workspace`, {
            method: 'GET',
            headers: {
                Accept : 'application/json',
                Authorization : `Bearer ${loginResponse.accessToken}`,
            },
        });
        //console.log('value of response in GET_WORKSPACES: ', JSON.stringify(response));
        // if (!response.ok) {
        //     throw new Error('Error getting workspaces in GET_WORKSPACES');
        // }
        const workspaces = await response.json();
        //console.log('value of workspaces inside GET_WORKSPACES: ', JSON.stringify(workspaces));
        return workspaces;
    // } catch (error) {
    //     console.error('Error: ', error);
    //     throw error;
    // }
};

