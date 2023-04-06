import { Injectable } from '@angular/core';
import { SidebarMenuItemTitleEnum } from '../enums';
import { createStore, setProp, withProps } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { SidebarMenuItemState } from '../interfaces';

  const initialState: SidebarMenuItemState = {
    menu: SidebarMenuItemTitleEnum.Overview
  };
  
  const store = createStore(
    { name: 'SidebarMenuItemStore' },
    withProps<SidebarMenuItemState>(initialState)
  );

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuItemService {
  public get activatedMenuItem(): Observable<SidebarMenuItemState> {
    return store.asObservable();
  }

  public updateActivatedMenuItem(item: SidebarMenuItemTitleEnum): void {
    store.update(setProp('menu', item));
  }
}
