import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JobsService } from '../../services';
import * as jobActions from '../actions/job.action';
@Injectable()
export class JobEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobActions.loadJobsAction),
      mergeMap(({ pageNumber }) =>
        this.jobService.getjobs(pageNumber).pipe(
          map((jobs) => jobActions.loadJobsActionSucced({ jobs })),
          catchError((error) => of(jobActions.loadJobsActionFailed({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private jobService: JobsService) {}
}
