import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsRouting } from './goals.routing';
import { GoalsComponent } from './goals.component';

@NgModule({
  declarations: [
    GoalsComponent
  ],
  imports: [
    CommonModule,
    GoalsRouting
  ]
})
export class GoalsModule { }
