import { apiClient } from './client';
import { API_ENDPOINTS } from './endpoints';
import type { ApiResponse, AuthResponse, LoginDto, SignupDto, User } from './types';

export const authApi = {
  login: async (credentials: LoginDto): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    if (response.success && response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  signup: async (data: SignupDto): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.SIGNUP,
      data
    );
    if (response.success && response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      apiClient.setToken(null);
    }
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<ApiResponse<User>>(
      API_ENDPOINTS.AUTH.ME
    );
    return response.data;
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.REFRESH
    );
    if (response.success && response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },
};

