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
        path: AppRouteEnum.Home,
        loadChildren: () => import('./pages/home/home.module')
          .then((m) => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
