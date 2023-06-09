const BASE_URL = 'http://localhost:4001';

function createCartAPI(userId) {  
    return fetch(`${BASE_URL}/cart/create`,  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }
  
  export default createCartAPI;
  