import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TRANSACTION_TYPES_ARRAY } from './data';
import { MatDialog } from '@angular/material/dialog';
import { TransactionStorageService, TransactionTypeEnum } from '@features/transactions';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionDialogComponent {
  private minLength = 2;
  public readonly transactionTypesArray = TRANSACTION_TYPES_ARRAY;

  public readonly nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minLength)
  ]);

  public readonly amountControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+$/)
  ]);

  public readonly typeControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private readonly matDialog: MatDialog,
    private readonly transactionStorageService: TransactionStorageService
  ) {}

  public onSubmit(): void {
    if (!this.nameControl.invalid && !this.amountControl.invalid 
      && !this.typeControl.invalid) {
        this.transactionStorageService.updateStorage({
          name: this.nameControl.value!,
          amount: this.amountControl.value!,
          type: this.typeControl.value as TransactionTypeEnum,
          date: new Date()
        });
        this.matDialog.closeAll();
      }
  }

  public getErrorMessage(): string | void {
    return this.getRequiredErrorMessage() ?? this.getMinLengthErrorMessage() ?? '';
  }

  public getRequiredErrorMessage(): string | null {
    if (this.nameControl.hasError('required')) {
      return 'You must enter a value';
    }

    return null;
  }

  public getMinLengthErrorMessage(): string | null {
    if (this.nameControl.hasError('minlength')) {
      return `You must enter a value that more than ${this.minLength} words`;
    }

    return null;
  }
  
  
  public getRequiredsErrorMessage(): string | null {
    if (this.nameControl.hasError('minlength')) {
      return `You must enter a value that more than ${this.minLength} words`;
    }
    
    return null;
  }
 
  public getNotANumberErrorMessage(): string | void {
    if (this.amountControl.hasError('pattern')) {
      return `You must enter a value that will be a number`;
    }
  }
}
