import {Transaction} from "./transaction.model";

export interface AccountResponse {
  name: string;
  surname: string;
  balance: number;
  transactionDTOS: Transaction[];

}
