import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiossecure = () => {
  const navigate = useNavigate();
  const { logoutuser } = useContext(AuthContext);
  // request interceptor to add authorixation header for every signle secure toathe api
  axiosSecure.interceptors.request.use(
    function (config) {
      console.log("request  by interceptor");
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (config) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return config;
    },
    async (error) => {
      const status = error.response.status;
      console.log('status error inn hte interceptor' , status);
      
      if (status === 401 || status === 403) {
        await logoutuser();
        navigate("/login");
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiossecure;
