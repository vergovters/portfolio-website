import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import reposReducer from "./reducers/repos.reducers";
import jobsReducer from "./reducers/jobs.reducer";
import thunk from "redux-thunk";
import { type } from "os";

const rootReducer = combineReducers({
    repos: reposReducer,
    jobs: jobsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

