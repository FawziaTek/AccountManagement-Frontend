import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsComponent} from "./accounts/accounts.component";
import {CustomersComponent} from "./customers/customers.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {SearchAccountComponent} from "./search-account/search-account.component";

const routes: Routes = [
  {path:'account/:id', component: SearchAccountComponent},
  {path:'account', component: AccountsComponent},
  {path:'customer', component: CustomersComponent},
  {path:'new-account', component: NewAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
