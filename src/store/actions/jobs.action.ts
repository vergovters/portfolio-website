import axios from 'axios';
import { Dispatch } from 'redux';
import { JobsActions, JobsActionTypes } from '../types/jobs';


const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Junior React JavaScript Ukraine',
    page: '2',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '41aacf8131msh4b72782b2fdf652p1348dbjsn90a3b619451e',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};


export const getJobs = () => {
  return async (dispatch: Dispatch<JobsActions>) => {
    try {
      dispatch({ type: JobsActionTypes.FETCH_JOBS });
      const response = await axios.request(options);
        dispatch({
          type: JobsActionTypes.FETCH_JOBS_SUCCESS,
          payload: response.data.data
        });
    } catch (e) {
      dispatch({
        type: JobsActionTypes.FETCH_JOBS_ERROR,
        payload: `${e}`
      });
    }
  };
};