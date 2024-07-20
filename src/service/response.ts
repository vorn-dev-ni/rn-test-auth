export  type ErrorMessage = 
  | "Phone number does not exist"
  | "Email does not exist"
  | "Incorrect password";

export  type ErrorResponse = {
  code: string;
  message: ErrorMessage;
  data: Record<string, never>;
};
export type LoginErrorResponse ={
    code: string,
    message: string,
    data:  {
            key: string,
            msg: string
        } [
      
    ]
}
export type UserResponse = {
    message: "Success";
    data:{
     id: number;
      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      phone: string;
      countryCode: string;
      createdDt: string;
      bio: string | null;
      avatar: string | null;
      city: string | null;
      state: string | null;
      address1: string | null;
      address2: string | null;
      socialGoogleId: string | null;
      role: {
        id: number;
        code: string;
        name: string;
      };
    }
    
    };
export  type SuccessResponse = {
  message: "Success";
  data: {
    status: number;
    token_type: string;
    expires_in: number;
    access_token: string;
    accessToken: string;
    refreshToken: string;
    sessionId: string;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      phone: string;
      countryCode: string;
      createdDt: string;
      bio: string | null;
      avatar: string | null;
      city: string | null;
      state: string | null;
      address1: string | null;
      address2: string | null;
      socialGoogleId: string | null;
      role: {
        id: number;
        code: string;
        name: string;
      };
    };
  };
};

export type Response = ErrorResponse | SuccessResponse | ;