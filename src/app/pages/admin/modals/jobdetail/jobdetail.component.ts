import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JOB } from 'src/app/models/global';
@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.scss'],
})
export class JobdetailComponent implements OnInit {
  repeatArray = new Array(10);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JOB,
    private dialogRef: MatDialogRef<JobdetailComponent>
  ) {}

  ngOnInit(): void {}
  editJob(job: JOB) {
    this.dialogRef.close({ operation: 'edit', job });
  }
  deletejob(job: JOB) {
    this.dialogRef.close({ operation: 'delete', job });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
