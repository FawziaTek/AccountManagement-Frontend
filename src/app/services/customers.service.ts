import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../environments/environments";

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
    return this.http.get<any>(environments.hostBackend+"/v1/customer",this.httpOptions);

  }

}
