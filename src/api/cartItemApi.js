const BASE_URL = 'http://localhost:4001';

export function addToCart(data) {
    const body = {
      userId: data.userId,
      productId: data.id
    }

    const token = localStorage.getItem('jwt');

    return fetch(`${BASE_URL}/basket/addtocart`,  {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }

  export function updateCartItem(data) {
    const body = {
      userId: data.userId,
      productId: data.id
    }
    const token = localStorage.getItem('jwt');

    return fetch(`${BASE_URL}/basket/updatecartitem`,  {
      method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }

  export function fetchCartItems(data) {
    const userId = data;
    const token = localStorage.getItem('jwt');

    return fetch(`${BASE_URL}/basket/showcart?userId=${userId}`,  {
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": token
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }

  export function deleteCheckedCartItems(data) {
    const userId = data.userId;
    const productsIds = data.productsIds;
    const token = localStorage.getItem('jwt');
    const body = { productsIds };
    return fetch(`${BASE_URL}/basket/deletefromcart?userId=${userId}`,  {
      method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }

  export function deleteAllCartItems(data) {
    const userId = data;
    const productsIds = [];
    const token = localStorage.getItem('jwt');
    const body = { productsIds };

    return fetch(`${BASE_URL}/basket/deletefromcart?userId=${userId}`,  {
      method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify(body),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create cart');
        }
        return response.json();
      })
      .then(data => data);
  }
  
  // export default addToCart;