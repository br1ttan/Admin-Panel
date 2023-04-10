import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TransactionItemComponent } from './components';

@NgModule({
  declarations: [
    TransactionItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TransactionItemComponent
  ]
})
export class TransactionsModule { }
