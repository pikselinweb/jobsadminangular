import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminPanelComponent } from './contents/admin-panel/admin-panel.component';
import { AdminJobsComponent } from './contents/admin-jobs/admin-jobs.component';

@NgModule({
  declarations: [AdminComponent, AdminPanelComponent, AdminJobsComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
