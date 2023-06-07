const BASE_URL = 'http://localhost:4001';

async function getAllCategories() {
  try {
    const response = await fetch(`${BASE_URL}/category`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    console.log('CAtegories', data)
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

export { getAllCategories, getCategoryById };