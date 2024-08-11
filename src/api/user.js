import axios from 'axios';

export const signin = async (username, password) => {
  console.log("🚀 ~ signin ~ username, password:", username, password)
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });
    console.log("🚀 ~ signin ~ response:", response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//en la linea 6 hice un cambio despues de POST