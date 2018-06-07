# Section3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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


##To create ng app

npm install -g @angular/cli
ng new my-app
cd my-app
ng serve

##To create component
1. Create component.
2. Register component to module.

OR use cli

##To create service

Logic for calling an HTTP service
1. Tight coupling if you put this logic in component.ts
2. Component should only have presentation logic.
3. Multiple classes may use the http service.

Therefore we need services.
Services don't have Decorators like Component.

##Dependency injection

1. Using new operator and creating instance of Service in constructor of Component causes tight coupling. 
2. If we add parameters to Service constructor we end up with multiple changes in app code.

To avoid above, change constructor of Component and add Service as a dependency (Parameter)
Instruct angular to inject dependencies of the component into the component.
*Services are added as Singleton classes in Angular Apps.*

If services need dependencies on other services we need to use *@Injectable* decorator.
