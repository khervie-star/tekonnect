import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

let axiosInstance;
const BASE_URL = "http://localhost:2101"; // "https://npv-api.pario.ng/api/v1";
const TOKEN_KEY = "accessToken";

const setupAxiosInstance = (baseUrl: string) => {
  axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json"
    }
  });

  axiosInstance.interceptors.request.use(async (config) => {
    // const accessToken = await AsyncStorage.getItem("accessToken");
    const accessToken = await SecureStore.getItemAsync(TOKEN_KEY);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        // await AsyncStorage.removeItem("accessToken");
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        Alert.alert(
          "Session Expired",
          "Your session has expired. Please log in again."
        );
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const getAxiosInstance = () => {
  return setupAxiosInstance(BASE_URL);
};
