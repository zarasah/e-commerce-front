const BASE_URL = 'http://localhost:4001';

export const login = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const data = await response.json();
            return data;
        }  else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }
    } catch (error) {
        throw new Error(error.message || 'Login failed');
    }
}