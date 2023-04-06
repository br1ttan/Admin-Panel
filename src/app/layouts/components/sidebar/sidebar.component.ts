import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarMenuItemService, SidebarMenuItemTitleEnum } from '@features/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(
    private readonly sidebarMenuItemService: SidebarMenuItemService
  ) {}

  public initializeMenuItem(item: SidebarMenuItemTitleEnum): void {
    this.sidebarMenuItemService.updateActivatedMenuItem(item);
  }
}
