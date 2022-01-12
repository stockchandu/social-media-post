import { GIFLOADING, GIFSUCCESS, GIFERROR,GIFURL } from "./actionType"

const gifStore = {
    data: {
        loading: false,
        gifStore: [],
        error: false,
        gifurl:""
    }

}

export const gifReducer = (state = gifStore, { type, payload }) => {

    switch (type) {
        case GIFLOADING:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: true,
                }

            }
        case GIFSUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    gifStore: payload
                }

            }

        case GIFERROR:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    error: true
                }
            }
        case GIFURL:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    gifurl: payload
                }
            }


        default:
            return {
                ...state
            }
    }

}