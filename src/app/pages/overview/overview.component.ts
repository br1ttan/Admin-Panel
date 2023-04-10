import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AppRouteEnum } from '@core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent extends BaseComponent {
  constructor() {
    super(AppRouteEnum.Overview);
  }
}
