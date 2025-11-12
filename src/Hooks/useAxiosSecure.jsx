import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    //request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
    //response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("inside the interceptor", err);
        // if (err.status === 403 || err.status === 401) {
        //   signOutUser().then(() => {
        //     navigate("/login");
        //   });
        // }
      }
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser, navigate]);

  return instance;
};

export default useAxiosSecure;
