import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';
import { RouteNavigateService } from '@features/route';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicesComponent extends BaseComponent {
  constructor() {
    super(AppRouteEnum.Invoices);
  }
}
