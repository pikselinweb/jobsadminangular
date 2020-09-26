import { createAction, props } from '@ngrx/store';
import { JOB } from 'src/app/models/global';
// LOAD AND PAGINAGE ACTION
export const loadJobsAction = createAction(
  '[JOBS] loading',
  props<{ pageNumber?: number }>()
);
export const loadJobsActionSucced = createAction(
  '[JOBS] loaded',
  props<{ jobs: JOB[] }>()
);
export const loadJobsActionFailed = createAction(
  '[JOBS] can not loaded',
  props<{ error: Error }>()
);
// ADD ACTION
export const addJobsAction = createAction(
  '[JOB] adding',
  props<{ job: JOB }>()
);
export const addJobsActionSucced = createAction(
  '[JOB] added',
  props<{ job: JOB }>()
);
export const addJobsActionFailed = createAction(
  '[JOB] connot added',
  props<{ error: Error }>()
);
// EDIT ACTION
export const editJobsAction = createAction(
  '[JOB] updating',
  props<{ job: JOB }>()
);
export const editJobsActionSucced = createAction(
  '[JOB] updated',
  props<{ job: JOB }>()
);
export const editJobsActionFailed = createAction(
  '[JOB] connot updated',
  props<{ error: Error }>()
);
// DELETE ACTION
export const deleteJobsAction = createAction(
  '[JOB] romoving',
  props<{ job: JOB }>()
);
export const deleteJobsActionSucced = createAction(
  '[JOB] removed',
  props<{ job: JOB }>()
);
export const deleteJobsActionFailed = createAction(
  '[JOB] connot removed',
  props<{ error: Error }>()
);
