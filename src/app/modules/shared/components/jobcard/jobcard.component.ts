import { Component, Input, OnInit } from '@angular/core';
import { JOB } from 'src/app/models/global';

@Component({
  selector: 'job-card',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss'],
})
export class JobcardComponent implements OnInit {
  @Input() job: JOB;
  constructor() {}

  ngOnInit(): void {}
}
