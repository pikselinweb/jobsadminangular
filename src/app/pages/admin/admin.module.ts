import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminWelcome, JobsContent } from './contents';
import { JobDeleteModal, JobDetailModal, JobEditModal } from './modals';
import {
  RecaptchaFormsModule,
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AdminComponent,
    AdminWelcome,
    JobsContent,
    JobDeleteModal,
    JobDetailModal,
    JobEditModal,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,
  ],
  entryComponents: [JobDeleteModal, JobDetailModal, JobEditModal],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaKey },
  ],
})
export class AdminModule {}
