import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../environments/environments";
import {AccountRequest} from "../model/accountrequest.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  credentials = {username:'admin', password: 'admin'}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin')
    })
  };
  constructor(private http:HttpClient) { }

  public getAccounts():Observable<any>
  {
    return this.http.get<any>(environments.hostBackend+"/v1/account",this.httpOptions);
  }

  public saveAccount(account: AccountRequest):Observable<any>{
    return this.http.post<any>(environments.hostBackend+"/v1/account",account,this.httpOptions);
  }

  public getAccount(accountId : number):Observable<any>{
    return this.http.get<any>(environments.hostBackend+"/v1/account/"+accountId,this.httpOptions);
  }
}
