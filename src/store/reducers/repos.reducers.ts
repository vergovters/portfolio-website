import { State, RepoActionTypes, RepoActions} from "../types/repos";

  
const defaultState: State = {
    items: [],
    isFetching: true,
    error: null
    
};

export default function reposReducer(state = defaultState, action: RepoActions): State {
    switch (action.type) {
        case RepoActionTypes.FETCH_REPOS:
            return {
                ...state,
            }
        case RepoActionTypes.FETCH_REPOS_SUCCESS:
            return{
                isFetching:false,
                error: null,
                items: action.payload,
            }
        case RepoActionTypes.FETCH_REPOS_ERROR:
            return{
                isFetching:false,
                error: action.payload,
                items: [],
        }
        default:
            return state
    }
}