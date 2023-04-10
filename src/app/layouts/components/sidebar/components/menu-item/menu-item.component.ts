import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarMenuItemTitleEnum } from './enums';
import { AppRouteEnum } from '@core';
import { RouteNavigateService } from '@features/route';
import { Subject, takeUntil } from 'rxjs';
import { SidebarMenuItemArray } from './data';

@Component({
  selector: 'sidebar-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuItemComponent implements AfterViewInit, OnDestroy {
  @ViewChild('parentElement')
  public parentElement!: ElementRef<HTMLElement>;

  @ViewChild('routeName')
  public routeName!: ElementRef<HTMLElement>;

  public readonly sidebarMenuItemArray = SidebarMenuItemArray;
  
  private readonly _destroy$ = new Subject();

  constructor(
    private readonly routeNavigateService: RouteNavigateService
  ) {}

  public ngAfterViewInit(): void {
      this.initItemByRouteName();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  public onClick(element: HTMLDivElement): void {
    if (element.classList.contains('active')) return;
    
    const children = Array.from(this.parentElement.nativeElement.children);

      children.filter((child) => child !== element)
        .forEach((child) => {
          child.classList.remove('active');
        })

    element.classList.add('active');
  }

  private initItemByRouteName(): void {
    const children = Array.from(this.parentElement.nativeElement.children);

    children.forEach((child) => {
      child.classList.remove('active');
    })

    this.routeNavigateService.activatedRouteName
    .pipe(
      takeUntil(this._destroy$)
    )
    .subscribe((routeName) => {
          children.forEach((child) => {
            if (child.getAttribute('RouteName') === routeName) {
              child.classList.add('active');
            }
        })
    })
  }
}
