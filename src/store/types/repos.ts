export interface State {
    items: any[];
    isFetching: boolean;
    error: null | string;
}
export enum RepoActionTypes {
    FETCH_REPOS = 'FETCH_REPOS',
    FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR',
}
interface FetchRepoAction {
    type: RepoActionTypes.FETCH_REPOS;
}
interface FetchRepoSuccessAction {
    type: RepoActionTypes.FETCH_REPOS_SUCCESS;
    payload: any[]
}
interface FetchRepoErrorAction {
    type: RepoActionTypes.FETCH_REPOS_ERROR;
    payload: string;
}
export type RepoActions = FetchRepoAction | FetchRepoErrorAction | FetchRepoSuccessAction