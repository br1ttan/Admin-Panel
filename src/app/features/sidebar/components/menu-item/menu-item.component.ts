import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SidebarMenuItemArray } from '@features/sidebar/data';
import { SidebarMenuItemTitleEnum } from '@features/sidebar/enums';

@Component({
  selector: 'sidebar-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuItemComponent implements AfterViewInit {
  @ViewChild('parentElement')
  public parentElement!: ElementRef<HTMLElement>;

  @Output()
  public emitItem = new EventEmitter<SidebarMenuItemTitleEnum>();

  public readonly sidebarMenuItemArray = SidebarMenuItemArray;

  public ngAfterViewInit(): void {
      this.initActiveItem();
  }

  public onToggle(
    element: HTMLDivElement, 
    sidebarMenuItemTitleEnum: SidebarMenuItemTitleEnum
  ): void {
    if (element.classList.contains('active')) return;
    
    const children = Array.from(this.parentElement.nativeElement.children);

      children.filter(child => child !== element)
        .forEach((item) => {
          item.classList.remove('active');
        })

    element.classList.add('active');

    this.emitItem.emit(sidebarMenuItemTitleEnum);
    this.checkAndSetDefaultActiveItem(children);
  }

  private initActiveItem(): void {
    const children = Array.from(this.parentElement.nativeElement.children);

    this.checkAndSetDefaultActiveItem(children);
    this.emitItem.emit(SidebarMenuItemTitleEnum.Overview);
  }

  private checkAndSetDefaultActiveItem(elements: Element[]): void {
    const isActive = elements.filter((el) => el.classList.contains('active'));
    
    if (isActive.length === 0) {
      elements[0].classList.add('active');
    }
  }
}
