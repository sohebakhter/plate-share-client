import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://plateshare-server.vercel.app",
});

//custom hook for using axios instance facilities
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
