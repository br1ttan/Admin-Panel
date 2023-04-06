import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AccountComponent, MailComponent, NotificationsComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    MailComponent,
    NotificationsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
