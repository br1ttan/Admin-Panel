import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRouting } from './settings.routing';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRouting
  ]
})
export class SettingsModule { }
