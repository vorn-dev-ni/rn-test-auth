export  type ErrorCode = "NO_RECORD_FOUND" | "INCORRECT_PASSWORD";
export  type ErrorMessage = 
  | "Phone number does not exist"
  | "Email does not exist"
  | "Incorrect password";

export  type ErrorResponse = {
  code: ErrorCode;
  message: ErrorMessage;
  data: Record<string, never>;
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

export type Response = ErrorResponse | SuccessResponse;