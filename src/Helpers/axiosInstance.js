import axios from "axios";

const BASE_URL = "http://localohost:5014/api/v1";

const axiosInsatnce = axios.create();

axiosInsatnce.defaults.baseURL = BASE_URL;
axiosInsatnce.defaults.withCredentials = true;

export default axiosInsatnce;