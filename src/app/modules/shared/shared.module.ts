import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { JobcardComponent } from './components/jobcard/jobcard.component';
import { JobFrequencePipe } from './pipes/job-frequence.pipe';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [JobcardComponent, JobFrequencePipe, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularmaterialModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularmaterialModule,
    JobcardComponent,
    JobFrequencePipe,
    LoadingComponent,
  ],
})
export class SharedModule {}
