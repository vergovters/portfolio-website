import axios from 'axios';
import { Dispatch } from 'redux';
import { JobsActions, JobsActionTypes } from '../types/jobs';


const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'JavaScript React Ukraine',
    page: '2',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '31067bfc2cmsh291add07402a2e8p10fb78jsn3be4e6566635',
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