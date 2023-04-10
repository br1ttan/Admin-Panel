import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';
import { BaseComponent } from '../base.component';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from './components';
import { TransactionStorageService } from '@features/transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent extends BaseComponent {
  constructor(
    private readonly matDialog: MatDialog,
    public readonly transactionStorageService: TransactionStorageService
  ) {
    super(AppRouteEnum.Transactions);
  }

  public openDialog(): void {
    const dialogRef = this.matDialog.open(TransactionDialogComponent);
  }
}
