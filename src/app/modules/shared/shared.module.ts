import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { JobcardComponent } from './components/jobcard/jobcard.component';
import { JobFrequencePipe } from './pipes/job-frequence.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { FilterJobsComponent } from './components/filter-jobs/filter-jobs.component';
// LAZY LOAD MODULLERDE KULLILACAK PAYLAŞTIRILMIŞ MODÜL
@NgModule({
  declarations: [
    JobcardComponent,
    JobFrequencePipe,
    LoadingComponent,
    FilterJobsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularmaterialModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Ng2SearchPipeModule,
    AngularmaterialModule,
    JobcardComponent,
    JobFrequencePipe,
    LoadingComponent,
    FilterJobsComponent,
  ],
})
export class SharedModule {}
