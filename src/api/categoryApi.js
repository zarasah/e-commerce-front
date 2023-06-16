const BASE_URL = 'http://localhost:4001';

async function getAllCategories() {
  try {
    const response = await fetch(`${BASE_URL}/category`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getCategoryById(id) {
  try {
    const response = await fetch(`${BASE_URL}/category/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createCategory(data) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/category/create`, {
    method: 'POST',
    headers: {
      "Authorization": token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error fetching user data: ${error.message}`);
    });
}

function updateCategory(data) {
  const id = data.id;
  const body = data.data;
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/category/update?id=${id}`, {
    method: 'PUT',
    headers: {
      "Authorization": token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update category');
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error fetching user data: ${error.message}`);
    });
}

function deleteCategory(id) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/category/delete?id=${id}`, {
    method: 'DELETE',
    headers: {
      "Authorization": token,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error deleting category: ${error.message}`);
    });
}

export { getAllCategories, getCategoryById, createCategory, deleteCategory, updateCategory };