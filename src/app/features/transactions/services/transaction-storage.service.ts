import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TransactionStorageInterface } from '../interfaces';
import { TransactionTypeEnum } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class TransactionStorageService {
    public get storage$(): Observable<TransactionStorageInterface[] | []> {
        return this._storage$.asObservable();
    }

    private _storage$ = new BehaviorSubject<TransactionStorageInterface[] | []>([{
        amount: '32',
        name: 'Vladislav',
        date: new Date(),
        type: TransactionTypeEnum.Cars
    }]);

    public updateStorage(data: TransactionStorageInterface): void {
        const storage = this._storage$.getValue();
        const updatedStorage = [...storage, data];
        
        this._storage$.next(updatedStorage);
    }
}
