import axios from "axios";

const API_URL = "http://localhost:5000/products";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productDetails) => {
  try {
    const res = await axios.post(API_URL, productDetails);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, updatedDetails) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedDetails);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}; 