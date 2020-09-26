import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminWelcome, JobsContent } from './contents';
import { JobDeleteModal, JobDetailModal, JobEditModal } from './modals';

@NgModule({
  declarations: [
    AdminComponent,
    AdminWelcome,
    JobsContent,
    JobDeleteModal,
    JobDetailModal,
    JobEditModal,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  entryComponents: [JobDeleteModal, JobDetailModal, JobEditModal],
})
export class AdminModule {}
