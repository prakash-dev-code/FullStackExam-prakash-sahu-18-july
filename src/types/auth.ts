import { User } from "./common";

export interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;
  }

  export type ForgotPasswordResponse = {
    status: "success" | "error"; // or just "success" if you expect only that
    message: string;
  };

  export interface SignUpResponse {
    token: string;
    status: string;
    message?: string;
    data: {
      user: User;
    };
  }

  export interface SignUpInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  export interface VerifyOTPInput {
    email: string;
    otp: string | null;
  }

  export interface VerifyOTPResponse {
    token: string;
    message?: string;
    data: {
      user: User;
    };
  }