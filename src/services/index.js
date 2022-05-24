// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// ==|== Export ====================================================================================
export default {
  getContact() {
    try {
      return apiClient.get('/resume/contact/1/');
    } catch(error) {
      console.log(error);
    }
  },
  getSocial() {
    try {
      return apiClient.get('/links/social/');
    } catch(error) {
      console.log(error);
    }
  }
};
