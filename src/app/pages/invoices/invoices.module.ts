import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesRouting } from './invoices.routing';
import { InvoicesComponent } from './invoices.component';

@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRouting
  ]
})
export class InvoicesModule { }
