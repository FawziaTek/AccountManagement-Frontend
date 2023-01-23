import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environments} from "../../environments/environments";
import {AccountRequest} from "../model/accountrequest.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  credentials = {username:'admin', password: 'admin'}
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin')
    })
  };
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<any>
  {
    return this.http.get<any>("http://localhost:8382/v1/customer",this.httpOptions);

  }

}
