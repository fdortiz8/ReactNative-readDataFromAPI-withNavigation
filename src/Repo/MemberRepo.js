export const GET_MEMBER = async (loginResponse, messageMemberId) => {
    //try {
        console.log('value of loginResponse in GET_MEMBER: ', JSON.stringify(loginResponse.accessToken));
        //console.log('value of message.id in GET_MEMBER ', JSON.stringify(messageMemberId));
        const response = await fetch(`https://cse118.com/api/v2/member`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization : `Bearer ${loginResponse.accessToken}`,
            },
        });
        // if(!response.ok) {
        //     throw new Error('Error getting member in GET_MEMBER');
        // }
        const members = await response.json();
        console.log('members in GET_MEMBER: ', members);
        const memberName = members.find(member => messageMemberId === member.id);
        console.log('value of memberName returned', memberName);
        return memberName.name;
    // } catch (error){
    //     console.error('Error: ', error);
    //     throw error;
    // }
};