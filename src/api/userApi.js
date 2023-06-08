const BASE_URL = 'http://localhost:4001';

export default function fetchUser(userId) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/user/${userId}`, {
      headers: {
        "Authorization": token
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error fetching user data: ${error.message}`);
    });
}