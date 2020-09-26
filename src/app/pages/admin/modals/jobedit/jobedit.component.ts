import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { JOB } from 'src/app/models/global';

@Component({
  selector: 'app-jobedit',
  templateUrl: './jobedit.component.html',
  styleUrls: ['./jobedit.component.scss'],
})
export class JobeditComponent implements OnInit {
  jobForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<JobeditComponent>
  ) {}

  ngOnInit(): void {
    this.loadJobForm();
  }
  saveJob() {
    const formValue: JOB = {
      ...this.jobForm.value,
      area: this.stringToArray(this.jobForm.value.area),
    };

    this.dialogRef.close(formValue);
  }
  close() {
    this.dialogRef.close();
  }
  loadJobForm(): void {
    const jobInstance: JOB = { ...this.data?.job };
    this.jobForm = new FormGroup({
      id: new FormControl(jobInstance.id || ''),
      title: new FormControl(jobInstance.title || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
      ]),
      type: new FormControl(jobInstance.type || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      descriptor: new FormControl(jobInstance.descriptor || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      area: new FormControl(this.arrayToString(jobInstance.area), [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(140),
      ]),
      image: new FormControl(jobInstance.image || '', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
      ]),
      jobDescription: new FormControl(jobInstance.jobDescription || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(600),
      ]),
      company: new FormControl(jobInstance.company || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      city: new FormControl(jobInstance.city || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      address: new FormControl(jobInstance.address || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200),
      ]),
      web: new FormControl(jobInstance.web || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      salary: new FormControl(jobInstance.salary || 0, [
        Validators.required,
        Validators.pattern(`^-?[0-9]\\d*(\\.\\d{1,4})?$`), //^[0-9]*$
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
    });
  }
  getErrorMessage(form: FormGroup, fieldName: string): string {
    const formField = form.get(fieldName);
    return formField.hasError('required')
      ? 'This field can not be blank'
      : formField.hasError('pattern')
      ? 'Enter only number'
      : formField.hasError('minlength')
      ? `Below the character limit ( ${formField.errors.minlength.actualLength} /  ${formField.errors.minlength.requiredLength} )`
      : formField.hasError('maxlength')
      ? `Over the character limit ( ${formField.errors.maxlength.actualLength} /  ${formField.errors.maxlength.requiredLength}  )`
      : '';
  }
  private arrayToString(arr: string[]): string {
    let newString: string = '';
    if (arr?.length > 1) {
      arr.forEach((element, index) => {
        if (element) {
          if (index === arr.length - 1) {
            newString += element;
          } else {
            newString += `${element};`;
          }
        }
      });
    } else if (arr?.length === 1) {
      newString = arr[0];
    }
    return newString;
  }
  private stringToArray(str: string) {
    const arr: string[] = str
      .split(';')
      .map((el) => el.trim())
      .filter((newEl) => newEl.length > 0);
    return arr;
  }
}
