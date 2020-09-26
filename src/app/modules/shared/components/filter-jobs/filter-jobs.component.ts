import {
  Component,
  Input,
  OnInit,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { JOB } from 'src/app/models/global';

@Component({
  selector: 'filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.scss'],
})
export class FilterJobsComponent implements OnInit, OnDestroy {
  @Input() jobs: Observable<JOB[]>;
  @ViewChild('resultElement', { static: false }) resultElement;
  term: string;
  emptyResult: boolean;
  showResult: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  inputChange() {
    if (this.term.length > 0) {
      this.showResult = true;
    } else {
      this.showResult = false;
    }
    this.emptyResult = false;
    setTimeout(() => {
      const rows = this.document.getElementsByClassName('ac-row');
      this.emptyResult = rows.length > 0 ? false : true;
    }, 100);
  }
  ngOnInit(): void {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.document.addEventListener('click', this.onDocumentClick);
  }
  ngOnDestroy(): void {
    this.document.removeEventListener('click', this.onDocumentClick);
  }
  protected onDocumentClick(event: MouseEvent) {
    if (this.resultElement.nativeElement.contains(event.target)) {
      return;
    }
    this.showResult = false;
  }
}
