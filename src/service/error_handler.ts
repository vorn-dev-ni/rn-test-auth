// import axios, { AxiosError } from 'axios';
// import { LoginErrorResponse } from './response';

// export const handleErrorResponse = (error: AxiosError): string => {
//     let errorMessage = 'An unknown error occurred.';
//     if (error.response) {
//         const errorData = error.response.data as AxiosError;
//         switch (error.response.status) {
//             case 401:
//                 if (errorData.code === "UNAUTHORIZED" && errorData.message === "Invalid access token") {
//                     errorMessage = 'Invalid access token. Please log in again.';
//                 } else {
//                     errorMessage = 'Unauthorized access. Please check your credentials.';
//                 }
//                 break;
//             case 403:
//                 errorMessage = 'You do not have permission to access this resource.';
//                 break;
              
//             case 404:
//                 errorMessage = 'The requested resource was not found.';
//                 break;
//               case 422:
//                 const enitity = error.response.data as  LoginErrorResponse 
//                 errorMessage = enitity.data.map(errorItem => errorItem.msg).join(', ');
//             case 500:
//                 errorMessage = 'Internal server error. Please try again later.';
//                 break;
//             default:
//                 errorMessage = errorData.message || 'API error. Please try again.';
//                 break;
//         }
//     } else if (error.request) {
//         errorMessage = 'No network connection. Please check your internet connection and try again.';
//     } else {
//         errorMessage = error.message || 'An unknown error occurred.';
//     }

//     return errorMessage;
// }

import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  InternalServerErrorException,
  ValidationErrorException,
  ApiException,
} from './api_exception';

export const handleErrorResponse = (error: AxiosError): never => {
  if (error.response) {
    const { status, data } = error.response as AxiosResponse;
    switch (status) {
      //Error occur at the backend server
      case 401:
        throw new UnauthorizedException(data);
      case 403:
        throw new ForbiddenException(data);
      case 404:
        throw new NotFoundException(data);
      case 422:
        throw new ValidationErrorException(data);
      case 500:
        throw new InternalServerErrorException(data);
      default:
        throw new ApiException(status, data?.message || 'API error', data);
    }
  } 
  //Error like Socket connection not working
  else if (error.request) {
    throw new ApiException(0, 'No network connection', null,'No Internet Connection');
  } else {
    throw new ApiException(0, error.message || 'An unknown error occurred', null,'Something went wrong');
  }
};
