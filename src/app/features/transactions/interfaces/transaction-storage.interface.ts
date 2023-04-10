import { TransactionTypeEnum } from "../enums";

export interface TransactionStorageInterface {
    readonly name: string;
    readonly amount: string;
    readonly type: TransactionTypeEnum;
    readonly date: Date;
}
