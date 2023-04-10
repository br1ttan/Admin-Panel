import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsModule } from './transactions';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TransactionsModule
  ]
})
export class FeaturesModule { }
