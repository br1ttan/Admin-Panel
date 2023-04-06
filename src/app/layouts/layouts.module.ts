import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main';
import { HeaderModule, SidebarModule } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    SidebarModule
  ]
})
export class LayoutsModule { }
