import { Directive, inject } from '@angular/core';
import { RouteNavigateService } from '@features/route';
import { AppRouteEnum } from '../core/enums';

@Directive()
export class BaseComponent {
    private readonly routeNavigateService = inject(RouteNavigateService);

    constructor(
        routeName: AppRouteEnum
    ) {
        this.routeNavigateService.updateActivatedRouteName(routeName);
    }
}
