import { createAction, props } from '@ngrx/store';
import { JOB } from 'src/app/models/global';
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
