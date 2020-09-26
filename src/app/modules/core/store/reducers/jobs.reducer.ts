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
  // LOAD OR PAGINATE
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
  })),
  // ADD
  on(jobActions.addJobsAction, (state, { job }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(jobActions.addJobsActionSucced, (state, { job }) => ({
    ...state,
    loading: false,
    error: null,
    jobs: [job, ...state.jobs],
  })),
  on(jobActions.addJobsActionFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // EDIT
  on(jobActions.editJobsAction, (state, { job }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(jobActions.editJobsActionSucced, (state, { job }) => {
    let jobsArray = [...state.jobs];
    const jobIndex = jobsArray.findIndex((el) => el.id === job.id);
    if (jobIndex === -1) {
      jobsArray = [job, ...jobsArray];
    } else {
      jobsArray[jobIndex] = job;
    }

    return { ...state, loading: false, error: null, jobs: jobsArray };
  }),
  on(jobActions.editJobsActionFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // DELETE
  on(jobActions.deleteJobsAction, (state, { job }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(jobActions.deleteJobsActionSucced, (state, { job }) => {
    const jobsArray = [...state.jobs].filter((jb) => jb.id !== job.id);
    return { ...state, loading: false, error: null, jobs: jobsArray };
  }),
  on(jobActions.deleteJobsActionFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
export const jobReducer = (state, action) => _jobReducer(state, action);
