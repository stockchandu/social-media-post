import { createStore, combineReducers } from "redux"

import { userPostReducer } from "./userpost/reducer"
import { gifReducer } from "./gifstore/reducer"
const rootStore = combineReducers({
    userpost: userPostReducer,
    gif: gifReducer
})


export const store = createStore(rootStore)