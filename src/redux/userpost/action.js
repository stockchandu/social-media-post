import { POSTLOADING, POSTSUCCESS, POSTERROR } from "./actionType";

export const postLoading = (data) => ({ type: POSTLOADING, payload: data });
export const postSuccess = (data) => ({ type: POSTSUCCESS, payload: data });
export const postError = (data) => ({ type: POSTERROR, payload: data });