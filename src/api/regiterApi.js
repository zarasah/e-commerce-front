// import axios from 'axios';

// const BASE_URL = 'http://localhost:4001/';

// export const createUser = async (userData) => {
//     try {
//       const response = await fetch(`${BASE_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to create user');
//       }
  
//       return response.json();
//     } catch (error) {
//       throw new Error(error.message);
//     }
// };