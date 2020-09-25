import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';

@NgModule({
  declarations: [],
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
  ],
})
export class SharedModule {}
