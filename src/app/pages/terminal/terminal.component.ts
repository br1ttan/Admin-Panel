import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent extends BaseComponent {
  constructor() {
    super(AppRouteEnum.Terminal);
  }
}
