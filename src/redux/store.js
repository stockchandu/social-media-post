import { createStore, combineReducers } from "redux";
import { userPostReducer } from "./userpost/reducer";
import { gifReducer } from "./gifstore/reducer";

//it convert all reducer into one store means Single source of truth 
const rootStore = combineReducers({
    userpost: userPostReducer,
    gif: gifReducer
})

export const store = createStore(rootStore)