import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRouting } from './overview.routing';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRouting,
  ]
})
export class OverviewModule { }
