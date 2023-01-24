import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {AccountResponse} from "../model/accountresponse.model";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {
  accountFormGroup! : FormGroup;
  accountObservable! : Observable<AccountResponse>
  transactionFromGroup! : FormGroup;
  errorMessage! :string ;

  constructor(private fb : FormBuilder, private accountsService:AccountsService) { }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: this.fb.control('')
    });

  }
  handleSearchAccount() {
    let accountId : number =this.accountFormGroup.value.accountId;
    this.accountObservable=this.accountsService.getAccount(accountId).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }


}
