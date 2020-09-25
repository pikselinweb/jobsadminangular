import { createReducer, on } from '@ngrx/store';
import { JOBSTATE } from 'src/app/models/store';
import * as jobActions from '../actions/job.action';
const initialState: JOBSTATE = {
  loading: false,
  jobs: [],
  pageNumber: 1,
};
const _jobReducer = createReducer(
  initialState,
  on(jobActions.loadJobsAction, (state, { pageNumber }) => ({
    ...state,
    loading: true,
    error: null,
    pageNumber,
  })),
  on(jobActions.loadJobsActionSucced, (state, { jobs }) => ({
    ...state,
    loading: false,
    jobs,
    error: null,
  })),
  on(jobActions.loadJobsActionFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
export const jobReducer = (state, action) => _jobReducer(state, action);
