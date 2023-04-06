import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FeaturesModule } from '@features/features.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
