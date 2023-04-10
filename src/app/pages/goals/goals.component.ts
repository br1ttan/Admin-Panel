import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';
import { RouteNavigateService } from '@features/route';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent extends BaseComponent {
  constructor() {
    super(AppRouteEnum.Goals);
  }
}
