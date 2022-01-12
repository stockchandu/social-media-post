import { GIFLOADING, GIFSUCCESS, GIFERROR,GIFURL } from "./actionType"

export const gifLoading = (data) => ({ type: GIFLOADING, payload: data });
export const gifSuccess = (data) => ({ type: GIFSUCCESS, payload: data });
export const gifError = (data) => ({ type: GIFERROR, payload: data });
export const gifUrl = (data) => ({ type: GIFURL, payload: data });