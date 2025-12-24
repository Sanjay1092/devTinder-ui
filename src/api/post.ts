import axios from "axios";
import { LOGIN_URL, LOGOUT_URL, REQUEST_REVIEW_URL, REQUEST_SEND_URL, WITHCREDENTIALS } from "./constants";

export const login = async (emailId: string, password: string) => {
  const response = await axios.post(
    LOGIN_URL,
    { emailId, password },
    WITHCREDENTIALS
  );
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(LOGOUT_URL, {}, WITHCREDENTIALS);
  return response.data;
};

export const requestReviwed = async(requeststatus:string,requestId:string)=>{
  const response = await axios.post(REQUEST_REVIEW_URL(requeststatus,requestId),{},WITHCREDENTIALS);
  return response.data;
}

export const requestSend = async(requeststatus:string,requestId:string)=>{
  const response = await axios.post(REQUEST_SEND_URL(requeststatus,requestId),{},WITHCREDENTIALS)
  return response.data
}