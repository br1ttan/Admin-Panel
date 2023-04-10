import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TransactionStorageInterface } from '@features/transactions';

@Component({
  selector: 'transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent {
  @Input()
  public data!: TransactionStorageInterface;
}
