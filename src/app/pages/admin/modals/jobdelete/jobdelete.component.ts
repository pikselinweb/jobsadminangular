import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JOB } from 'src/app/models/global';
@Component({
  selector: 'app-jobdelete',
  templateUrl: './jobdelete.component.html',
  styleUrls: ['./jobdelete.component.scss'],
})
export class JobdeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JOB,
    private dialogRef: MatDialogRef<JobdeleteComponent>
  ) {}

  ngOnInit(): void {}
  deleteJob() {
    this.dialogRef.close(this.data);
  }
  cancel() {
    this.dialogRef.close();
  }
}
