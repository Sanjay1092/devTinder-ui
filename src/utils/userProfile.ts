import type { userProfileProps } from "./types"

export const userProfile=(user:userProfileProps)=>{ return {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    age: user.age ,
    gender: user.gender || "",
    bio: user.bio || "",
    photoUrl: user.photoUrl || ""
}}