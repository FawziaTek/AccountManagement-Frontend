# AccountManagementFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

This project provides to create account for existing customers in java Spring boot.

Summary The assessment consists of an API to be used for opening a new “current account” of already existing customers.

Requirements 
• The API will expose an endpoint which accepts the user information (customerID, initialCredit).

• Once the endpoint is called, a new account will be opened connected to the user whose ID is customerID.

• Also, if initialCredit is not 0, a transaction will be sent to the new account.

• Another Endpoint will output the user information showing Name, Surname, balance, and transactions of the accounts.

The application has 2 API

AccountAPI 
CustomerAPI

POST /v1/account - creates a new account for existing customer
GET /v1/account/{accountId} - retrieves an account
GET /v1/account - retrieves all accounts
GET /v1/customer - retrieves all customers

In Angular we developed 4 Components(interface):
- Customers List
- Account List
- Create Account
- Search Account

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


