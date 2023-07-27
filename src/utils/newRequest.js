import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://workspace-backend-bs3d.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
