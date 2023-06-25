const BASE_URL = 'http://localhost:4001';

async function getAllProducts() {
    try {
        const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getProductByCategory(id) {
  try {
      const response = await fetch(`${BASE_URL}/product?category=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
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

async function createProduct(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/product/create`, {
      method: 'POST',
      headers: {
        "Authorization": token,
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create product');
        }
        return response.json();
      })
      .then((data) => data.data)
      .catch((error) => {
        throw new Error(`Error creating product: ${error.message}`);
      });
  }

  function updateProduct(data) {
    const id = data.id;
    const body = data.data;
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/product/update?id=${id}`, {
      method: 'PUT',
      headers: {
        "Authorization": token,
      },
      body: body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => {
        throw new Error(`Error updating product: ${error.message}`);
      });
  }

  function deleteProduct(id) {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/product/delete?id=${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": token,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(`Error deleting product: ${error.message}`);
      });
  }

export {
    getAllProducts,
    getProductByCategory,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}