import axios from "axios";
import { BASE_URL, GET_FEED_URL, REQUEST_RECEIVED_URL, USER_CONNECTIONS_URL, WITHCREDENTIALS } from "./constants";

export const profileView = async () => {
  const res = await axios.get(BASE_URL + "profile/view", WITHCREDENTIALS);
  return res.data;
};

export const getFeed = async (page:number, limit:number) => {
  const response = await axios.get(GET_FEED_URL(page,limit), WITHCREDENTIALS);
  return response.data;
};

export const getConnections = async()=>{
  const response = await axios.get(USER_CONNECTIONS_URL, WITHCREDENTIALS);
  return response.data;
}

export const getRequestsReceived = async()=>{
  const response = await axios.get(REQUEST_RECEIVED_URL, WITHCREDENTIALS);
  return response.data;
};