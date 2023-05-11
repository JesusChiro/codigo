import axios from "axios";
import { URL_BACKEND_AUTH } from "../contants";

export const postLogin = async (objeto) => {
  const response = await axios.post(`${URL_BACKEND_AUTH}/auth/login`, objeto, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
