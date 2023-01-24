import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {Router} from "@angular/router";
import {AccountRequest} from "../model/accountrequest.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent  implements OnInit {
  newAccountFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private accountsService:AccountsService, private router:Router) { }

  ngOnInit(): void {
    this.newAccountFormGroup=this.fb.group({
      customer_Id : this.fb.control(null, [Validators.required]),
      initialCredit : this.fb.control(null,[Validators.required])
    });
  }

  handleSaveAccount() {
    let account:AccountRequest=this.newAccountFormGroup.value;
    this.accountsService.saveAccount(account).subscribe({
      next : data=>{
        alert("Account has been successfully saved!");
       this.router.navigateByUrl("/account");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
