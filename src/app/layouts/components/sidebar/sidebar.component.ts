import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarMenuItemTitleEnum } from './components/menu-item/enums';
import { RouteNavigateService } from '@features/route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  
  constructor(
    private readonly routeNavigateService: RouteNavigateService
  ) {}

  public initializeMenuItem(item: SidebarMenuItemTitleEnum): void {
  }
}
