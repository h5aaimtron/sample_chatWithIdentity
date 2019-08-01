# Sample Chat With Identity

This project includes a sample SignalR server implementation with identity configured (JWT) as well as an Angular 7 client application in their respective folders. Requires some basic configuration such as the appsettings.json, setting your database connection string, generating your own secret key.

# .NET Core Notes

Developed using .NET Core SDK 3.0.100-preview6-012264. Contains a basic SignalR chat example protected by Asp.Net Core Identity.

## Development server

You must provide a valid SQL or SQL Express connection string in the appsettings.json for the backing api. This database is where identity will generate the necessary tables and store accounts.

Run `dotnet run` from the command line or load and run in Visual Studio 2019+.


# Angular Fontend Notes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
