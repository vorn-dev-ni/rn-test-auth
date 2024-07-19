import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { BASE_URL } from "../utils/constants/api_url";
import { ApiException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException } from "./api_exception";

export const client = axios.create({
  baseURL: BASE_URL,
});


client.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
   (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 401:
          throw new UnauthorizedException(response.data);
        case 403:
          throw new ForbiddenException(response.data);
        case 404:
          throw new NotFoundException(response.data);
        case 500:
          throw new InternalServerErrorException(response.data);
        default:
          throw new ApiException(response.status, response.statusText, response.data);
      }
    }
    return Promise.reject(error);
  }

);