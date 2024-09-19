import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

let token = localStorage.getItem("token") || "";

function setToken(newToken: string) {
  if (newToken) {
    localStorage.setItem("token", newToken);
    token = newToken;
  }
}

axiosInstance.interceptors.request.use((config: any) => {
  if (!config.headers.Authorization && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { setToken };
export default axiosInstance;
