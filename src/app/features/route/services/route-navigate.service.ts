import { Injectable } from "@angular/core";
import { AppRouteEnum } from "@core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RouteNavigateService {
    public get activatedRouteName(): Observable<AppRouteEnum | null> {
        return this._activatedRouteName.asObservable();
    }

    private _activatedRouteName = new BehaviorSubject<AppRouteEnum | null>(null);

    public updateActivatedRouteName(routeName: AppRouteEnum): void {
        this._activatedRouteName.next(routeName);
    }
}
