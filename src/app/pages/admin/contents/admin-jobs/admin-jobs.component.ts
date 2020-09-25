import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { JOB } from 'src/app/models/global';
import { JOBSTATE } from 'src/app/models/store';
import { NavigationService } from 'src/app/modules/core/services';
import { loadJobsAction } from 'src/app/modules/core/store';

@Component({
  selector: 'admin-jobs',
  templateUrl: './admin-jobs.component.html',
  styleUrls: ['./admin-jobs.component.scss'],
})
export class AdminJobsComponent implements OnInit {
  jobState$: Observable<JOBSTATE>;
  jobs$: Observable<JOB[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  pageNumber$: Observable<number>;
  constructor(
    private store: Store<any>,
    private navigationService: NavigationService
  ) {
    this.jobState$ = this.store.pipe(select('jobs'), shareReplay());
    this.jobs$ = this.jobState$.pipe(select('jobs'));
    this.loading$ = this.jobState$.pipe(select('loading'));
    this.error$ = this.jobState$.pipe(select('error'));
    this.pageNumber$ = this.jobState$.pipe(select('pageNumber'));
  }

  ngOnInit(): void {
    this.store.dispatch(loadJobsAction({ pageNumber: 1 }));
    this.jobs$.subscribe((val) => console.log(val));
  }
  changePage(operation: string, pNumber: number) {
    const newPageNumber = operation === 'next' ? pNumber + 1 : pNumber - 1;
    this.store.dispatch(loadJobsAction({ pageNumber: newPageNumber }));
    this.navigationService.navigateToElement('admin-jobs');
  }
}
