import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';
import { JOB } from 'src/app/models/global';
import { JOBSTATE } from 'src/app/models/store';
import { NavigationService } from 'src/app/modules/core/services';
import {
  addJobsAction,
  deleteJobsAction,
  editJobsAction,
  loadJobsAction,
} from 'src/app/modules/core/store';
import { JobDeleteModal, JobDetailModal, JobEditModal } from '../../modals';
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
  term: string;
  constructor(
    private store: Store<any>,
    private navigationService: NavigationService,
    private dialog: MatDialog
  ) {
    this.jobState$ = this.store.pipe(select('jobs'), shareReplay());
    this.jobs$ = this.jobState$.pipe(select('jobs'));
    this.loading$ = this.jobState$.pipe(select('loading'));
    this.error$ = this.jobState$.pipe(select('error'));
    this.pageNumber$ = this.jobState$.pipe(select('pageNumber'));
  }

  ngOnInit(): void {
    this.store.dispatch(loadJobsAction({ pageNumber: 1 }));
  }
  changePage(operation: string, pNumber: number) {
    const newPageNumber = operation === 'next' ? pNumber + 1 : pNumber - 1;
    this.store.dispatch(loadJobsAction({ pageNumber: newPageNumber }));
    this.navigationService.navigateToElement('admin-jobs');
  }
  showJobDetail($event) {
    const showDialog = this.dialog.open(JobDetailModal, {
      data: $event,
      width: '650px',
    });
    showDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result?.operation === 'edit') {
          this.editJob(result.job);
        } else if (result?.operation === 'delete') {
          this.deleteJob(result.job);
        }
      });
  }
  addJob() {
    const addDialog = this.dialog.open(JobEditModal, {
      data: { loading$: this.loading$ },
      width: '650px',
    });
    addDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((newData) => {
        if (newData) {
          this.store.dispatch(addJobsAction({ job: newData }));
        }
      });
  }
  editJob($event) {
    const editDialog = this.dialog.open(JobEditModal, {
      data: { job: $event, loading$: this.loading$ },
      width: '650px',
    });
    editDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((newData) => {
        if (newData) {
          this.store.dispatch(editJobsAction({ job: newData }));
        }
      });
  }
  deleteJob($event) {
    const deleteDialog = this.dialog.open(JobDeleteModal, {
      data: $event,
      width: '650px',
    });
    deleteDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((deletedData) => {
        if (deletedData) {
          this.store.dispatch(deleteJobsAction({ job: deletedData }));
        }
      });
  }
}
