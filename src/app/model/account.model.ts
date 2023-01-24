import {Transaction} from "./transaction.model";
import {Customer} from "./customer.model";

export interface Account {
  accountId: number;
  balance: number;
  creationDate: Date;
  customerDTO: Customer;
  transactionDTOS: Transaction[];

}
