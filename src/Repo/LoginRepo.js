

export const LOGIN = async (email, password) => {
    try {
        const response = await fetch('https://cse118.com/api/v2/login', {
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: email, 
                password: password 
            }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        
        const loginResponse = await response.json();
        // console.log(JSON.stringify(loginResponse));
        return loginResponse;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};