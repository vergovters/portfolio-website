export interface State {
    jobs: any[];
    isFetching: boolean;
    error: null | string;
}


export enum JobsActionTypes {
    FETCH_JOBS = 'FETCH_JOBS',
    FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS',
    FETCH_JOBS_ERROR = 'FFETCH_JOBS_ERROR',
    SET_JOBS_PAGE = 'SET_JOBS_PAGE',
}

interface FetchJobsAction {
    type: JobsActionTypes.FETCH_JOBS;
}
interface FetchJobsSuccessAction {
    type: JobsActionTypes.FETCH_JOBS_SUCCESS;
    payload: any[]
}
interface FetchJobsErrorAction {
    type: JobsActionTypes.FETCH_JOBS_ERROR;
    payload: string;
}


export type JobsActions = FetchJobsAction | FetchJobsSuccessAction | FetchJobsErrorAction