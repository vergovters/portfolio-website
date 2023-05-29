import * as RepoActionCreators from './repos.action'
import * as JobsActionCreators from './jobs.action'

const ActionCreators = {
    ...RepoActionCreators,
    ...JobsActionCreators,
  };
  
export default ActionCreators;