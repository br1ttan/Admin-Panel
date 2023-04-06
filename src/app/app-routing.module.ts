import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { MainComponent } from '@layouts';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: AppRouteEnum.Overview,
        loadChildren: () => import('./pages/overview/overview.module')
          .then((m) => m.OverviewModule)
      },
      {
        path: AppRouteEnum.Cards,
        loadChildren: () => import('./pages/cards/cards.module')
          .then((m) => m.CardsModule)
      },
      {
        path: AppRouteEnum.Invoices,
        loadChildren: () => import('./pages/invoices/invoices.module')
          .then((m) => m.InvoicesModule)
      },
      {
        path: AppRouteEnum.Goals,
        loadChildren: () => import('./pages/goals/goals.module')
          .then((m) => m.GoalsModule)
      },
      {
        path: AppRouteEnum.Transactions,
        loadChildren: () => import('./pages/transactions/transactions.module')
          .then((m) => m.TransactionsModule)
      },
      {
        path: AppRouteEnum.Settings,
        loadChildren: () => import('./pages/settings/settings.module')
          .then((m) => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
