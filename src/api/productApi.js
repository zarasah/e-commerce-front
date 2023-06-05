const BASE_URL = 'http://localhost:4001';

async function getAllProducts() {
    try {
        const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
        const data = await response.json();
        console.log('DATA',data)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getProductById(id) {
    try {
        const response = await fetch(`${BASE_URL}/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export {
    getAllProducts,
    getProductById
}