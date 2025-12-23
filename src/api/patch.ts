import axios from "axios";
import { PROFILE_EDIT_URL, WITHCREDENTIALS } from "./constants";
import type { userProfileProps } from "../utils/types";

export const profileEdit = async(userProfile:userProfileProps)=>{
    console.log("123",userProfile?.age);
    
    const response = await axios.patch(PROFILE_EDIT_URL, userProfile, WITHCREDENTIALS);
    return response.data;
}