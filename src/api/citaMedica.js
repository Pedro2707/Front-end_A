import axios from 'axios';
import { domainUrlAPI, baseCitaMedicaUrl } from './constants';


export const findCitaMedicaByPage = async (page) => {
  try {
    const url = `${domainUrlAPI}/${baseCitaMedicaUrl}/page/${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCitaMedica = async (cita) => {
  try {
    const url = `${domainUrlAPI}/${baseCitaMedicaUrl}/${cita.id}`;
    const response = await axios.put(url, cita);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export const deleteCitaMedica = async (id) => {
  try {
    const url = `${domainUrlAPI}/${baseCitaMedicaUrl}/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}