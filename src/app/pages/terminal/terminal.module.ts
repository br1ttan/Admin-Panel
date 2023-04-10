import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { TerminalRouting } from './terminal.routing';

@NgModule({
  declarations: [
    TerminalComponent
  ],
  imports: [
    CommonModule,
    TerminalRouting
  ]
})
export class TerminalModule { }
