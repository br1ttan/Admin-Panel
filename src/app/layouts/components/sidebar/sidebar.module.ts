import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarMenuItemComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
