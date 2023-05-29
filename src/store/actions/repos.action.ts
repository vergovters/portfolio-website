import axios from 'axios';
import { RepoActionTypes, RepoActions } from '../types/repos';
import {Dispatch} from 'redux'

export const getRepos = () => {
  return async (dispatch: Dispatch<RepoActions>) => {
    try{
        dispatch({type: RepoActionTypes.FETCH_REPOS})
        const response = await axios.get(`https://api.github.com/users/IlliaProgrammer/starred`)
            setTimeout(() => {
                dispatch({type: RepoActionTypes.FETCH_REPOS_SUCCESS, payload: response.data})
            }, 500)
    } catch(e){
        dispatch({type: RepoActionTypes.FETCH_REPOS_ERROR, payload: `${e}` })        
    } 
  };
};


