import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRouting } from './transactions.routing';
import { SharedModule } from '@shared/shared.module';
import { TransactionDialogComponent } from './components';
import { FeaturesModule } from '@features/features.module';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionDialogComponent
  ],
  imports: [
    TransactionsRouting,
    SharedModule,
    FeaturesModule
  ]
})
export class TransactionsModule { }
