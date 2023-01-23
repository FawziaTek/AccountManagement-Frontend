import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NewAccountComponent } from './new-account/new-account.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchAccountComponent } from './search-account/search-account.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    CustomersComponent,
    NewAccountComponent,
    SearchAccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // for interaction with  backend api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
