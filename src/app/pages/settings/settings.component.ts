import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';
import { RouteNavigateService } from '@features/route';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent extends BaseComponent {
  constructor() {
    super(AppRouteEnum.Settings);
  }
}
