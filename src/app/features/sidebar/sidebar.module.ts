import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuItemComponent } from './components';

@NgModule({
  declarations: [
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarMenuItemComponent
  ]
})
export class SidebarModule { }
