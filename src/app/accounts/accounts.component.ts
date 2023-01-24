import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {catchError, Observable, throwError} from "rxjs";
import {Account} from "../model/account.model";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accounts! : Observable<Array<Account>>
  errorMessage! : object ;
  constructor(private accountsService : AccountsService) {
  }
  ngOnInit(): void {
    this.accounts = this.accountsService.getAccounts().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
}
