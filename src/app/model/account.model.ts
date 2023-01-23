import {Transaction} from "./transaction.model";
import {Customer} from "./customer.model";

export interface Account {
  account_id: number;
  balance: number;
  creationDate: Date;
  customerDTO: Customer;
  transactionDTOS: Transaction[];

}
