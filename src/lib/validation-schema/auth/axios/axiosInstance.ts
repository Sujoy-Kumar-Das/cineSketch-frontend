import axios, { AxiosInstance } from "axios";
import { auth } from "../../../../../auth";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const session = await auth();

    if (session?.user?.accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  } catch (err) {
    console.error("Failed to get session for request:", err);
    return config;
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject({
      message: error.response.data.message,
      success: error.response.data.success,
    });
  }
);

export default axiosInstance;
