import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JOB } from 'src/app/models/global';

@Component({
  selector: 'job-card',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss'],
})
export class JobcardComponent implements OnInit {
  @Input() job: JOB;
  @Output() showDetail = new EventEmitter<JOB>();
  @Output() editJob = new EventEmitter<JOB>();
  @Output() deleteJob = new EventEmitter<JOB>();
  constructor() {}

  ngOnInit(): void {}
  jobDetail(job: JOB) {
    this.showDetail.emit(job);
  }
  jobEdit(job: JOB) {
    this.editJob.emit(job);
  }
  jobDelete(job: JOB) {
    this.deleteJob.emit(job);
  }
}
