import { POSTLOADING, POSTSUCCESS, POSTERROR } from "./actionType"

const postStore = {
    data: {
        loading: false,
        userPost: [],
        error: false
    }

}

export const userPostReducer = (state = postStore, { type, payload }) => {

    switch (type) {
        case POSTLOADING:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: true,
                }

            }
        case POSTSUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    userPost: [...state.data.userPost, payload]
                }

            }

        case POSTERROR:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    error: true
                }
            }


        default:
            return {
                ...state
            }
    }

}