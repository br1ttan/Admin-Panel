import { TransactionTypeEnum } from "../../../../../features/transactions/enums";
import { TransactionTypesInterface } from "../interfaces";

export const TRANSACTION_TYPES_ARRAY: TransactionTypesInterface[] = [
    {
        type: TransactionTypeEnum.Cars
    },
    {
        type: TransactionTypeEnum.Food
    },
    {
        type: TransactionTypeEnum.Games
    },
    {
        type: TransactionTypeEnum.Shopping
    },
    {
        type: TransactionTypeEnum.Sport
    },
    {
        type: TransactionTypeEnum.Tv
    },
];
