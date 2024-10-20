import { getAxiosInstance } from "./instance";

const authService = "auth";
const userService = "user";

export const userLogin = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${authService}/login`,
    method: "POST",
    data
  });

  return response.data;
};

export const userRegistration = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${authService}/register`,
    method: "POST",
    data
  });

  return response.data;
};

// Get User
export const getUserByEmail = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${userService}/email/${data.userEmail}`,
    method: "GET"
  });

  return response.data;
};

export const getUserById = async (data: any) => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance({
    url: `${userService}/id/${data.userId}`,
    method: "GET"
  });

  return response.data;
};
