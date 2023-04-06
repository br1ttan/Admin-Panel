import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [
    SidebarModule
  ]
})
export class FeaturesModule { }
