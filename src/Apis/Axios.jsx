import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:5002/",
  headers: {
    "content-type": "application/json",
  },
});
