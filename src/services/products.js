import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get('/products.json');
    return res.data.products;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get('/products.json');
    const product = res.data.products.find(p => p.id === parseInt(id));
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productDetails) => {
  try {
    const res = await axios.post('/products.json', productDetails);
    return res.data.products;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, updatedDetails) => {
  try {
    const res = await axios.put(`/products.json/${id}`, updatedDetails);
    return res.data.products;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`/products.json/${id}`);
    return res.data.products;
  } catch (error) {
    throw error;
  }
}; 