export const BASE_URL = "http://localhost:1010/"
export const WITHCREDENTIALS = { withCredentials: true }
export const LOGIN_URL = BASE_URL + "login"
export const LOGOUT_URL = BASE_URL + "logout"
export const SIGNUP_URL = BASE_URL + "signup"
export const PROFILE_VIEW_URL = BASE_URL + "profile/view"
export const GET_FEED_URL = (page: number=0, limit: number=10) => `${BASE_URL}feed?page=${page}&limit=${limit}`
export const PROFILE_EDIT_URL = BASE_URL + "profile/edit"
export const USER_CONNECTIONS_URL = BASE_URL + "user/connections"
export const REQUEST_RECEIVED_URL = BASE_URL + "request/received"
export const REQUEST_REVIEW_URL = (requeststatus: string,requestId: string) => BASE_URL + `request/review/${requeststatus}/${requestId}`