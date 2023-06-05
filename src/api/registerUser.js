const registerUser = (userData) => {
    return fetch('http://localhost:4001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Registration failed');
            } else {
                console.log('then registerUser', res)
            }
        })
        .catch((error) => {
            console.log('catch registerUser', error)
            throw new Error(error.message);
        })
}

export default registerUser;