import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { BASE_URL } from "../utils/constants/api_url";
import { ApiException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException, ValidationErrorException } from "./api_exception";

export const client = axios.create({
  baseURL: BASE_URL,
});


client.interceptors.request.use(
  async (config) => {

    config.headers['apikey'] = '037cb34d-c5ee-4169-b2fd-bec049f77ecf';
    config.headers['x-platform'] = 'android';
    return config;
    
  },
   (error) => {
     if (!error.response) {
      // Network error (e.g., no internet connection)
      console.error('Network error:', error.message);
      throw new Error('Network error: Please check your internet connection.');
    }
    
    const { response } = error;
    
    if (response) {
      switch (response.status) {
        case 401:
          throw new UnauthorizedException(response.data);
        case 403:
          throw new ForbiddenException(response.data);
        case 404:
          throw new NotFoundException(response.data);
        case 423:
          throw new ValidationErrorException(response.data);
        case 500:
          throw new InternalServerErrorException(response.data);
        default:
          throw new ApiException(response.status, response.statusText, response.data);
      }
    }
    return Promise.reject(error);
  }

);