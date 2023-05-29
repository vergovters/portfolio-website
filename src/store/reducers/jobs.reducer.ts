import { State, JobsActionTypes, JobsActions} from "../types/jobs";

  
const defaultState: State = {
    jobs: [],
    isFetching: false,
    error: null,

};

export default function jobsReducer(state = defaultState, action: JobsActions): State {
    switch (action.type) {
        case JobsActionTypes.FETCH_JOBS:
            return {
                ...state, 
                isFetching: true,
            }
        case JobsActionTypes.FETCH_JOBS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error: null,
                jobs: action.payload,
            }
        case JobsActionTypes.FETCH_JOBS_ERROR:
            return{
                ...state,
                isFetching:false,
                error: action.payload,
            }

        default:
            return state
    }
}