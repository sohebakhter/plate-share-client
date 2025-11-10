import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

//custom hook for using axios instance facilities
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
