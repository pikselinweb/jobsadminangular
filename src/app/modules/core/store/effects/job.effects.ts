import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JobsService } from '../../services';
import * as jobActions from '../actions/job.action';
@Injectable()
export class JobEffects {
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobActions.loadJobsAction),
      mergeMap(({ pageNumber }) =>
        this.jobService.getjobs(pageNumber).pipe(
          map((jobs) => {
            this.snackbar.open('Jobs loaded successfully', 'OK', {
              duration: 2500,
            });
            return jobActions.loadJobsActionSucced({ jobs });
          }),
          catchError((error) => of(jobActions.loadJobsActionFailed({ error })))
        )
      )
    )
  );
  addJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobActions.addJobsAction),
      mergeMap(({ job }) =>
        this.jobService.addJob(job).pipe(
          map((newJob) => {
            this.snackbar.open('Operation completed successfully', 'OK', {
              duration: 2500,
            });
            return jobActions.addJobsActionSucced({ job: newJob });
          }),
          catchError((error) => of(jobActions.addJobsActionFailed({ error })))
        )
      )
    )
  );
  editJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobActions.editJobsAction),
      mergeMap(({ job }) =>
        this.jobService.updateJob(job).pipe(
          map((eJob) => {
            this.snackbar.open('Operation completed successfully', 'OK');
            return jobActions.editJobsActionSucced({ job: eJob });
          }),
          catchError((error) => of(jobActions.editJobsActionFailed({ error })))
        )
      )
    )
  );
  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobActions.deleteJobsAction),
      mergeMap(({ job }) =>
        this.jobService.deleteJob(job).pipe(
          map((dJob) => {
            this.snackbar.open('Operation completed successfully', 'OK', {
              duration: 2500,
            });
            return jobActions.deleteJobsActionSucced({ job: dJob });
          }),
          catchError((error) =>
            of(jobActions.deleteJobsActionFailed({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private jobService: JobsService,
    private snackbar: MatSnackBar
  ) {}
}
