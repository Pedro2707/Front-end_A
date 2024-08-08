import axios from 'axios';

export const signin = async (username, password) => {
  console.log("🚀 ~ signin ~ username, password:", username, password)
  try {
    const response = await axios.post('http://localhost:3000/auth/login', { username, password });
    console.log("🚀 ~ signin ~ response:", response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
