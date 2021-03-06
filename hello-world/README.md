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

## To create ng app

npm install -g @angular/cli
ng new my-app
cd my-app
ng serve

## To create component

1. Create component.
2. Register component to module.

OR use cli
Shortcut `ng g c component_name`

## To create service

Logic for calling an HTTP service

1. Tight coupling if you put this logic in component.ts
2. Component should only have presentation logic.
3. Multiple classes may use the http service.

Therefore we need services.
Services don't have Decorators like Component.

Shortcut `ng g s service_name`

## Dependency injection

1. Using new operator and creating instance of Service in constructor of Component causes tight coupling.
2. If we add parameters to Service constructor we end up with multiple changes in app code.

To avoid above, change constructor of Component and add Service as a dependency (Parameter)
Instruct angular to inject dependencies of the component into the component.
**Services are added as Singleton classes in Angular Apps.**

If services need dependencies on other services we need to use *@Injectable* decorator.

## Property Binding

If you're adding text between HTML tags - use string interpolation.
Otherwise, use the property binding syntax.
Property binding works only one way.
Changes in component reflect on DOM but not vice versa.

There are properties in DOM which are not attributes of HTML and vice versa.
For eg: colspan in `<td>` does not exist in DOM. Use `attr.` as a prefix.

## Class binding

If the condition evaluates to true, the class will be adde. Otherwise removed.
Useful for active/inactive classes.

## Style binding

All available [Style Properties](https://www.w3schools.com/jsref/dom_obj_style.asp).

## Event Binding

When an event occurs on one element, the event bubbles all the way to the top element, unless there is a handler to ensure that the event is taken care of.

## Two way binding

How to reflect the changes in the DOM to the component.
Error:
Can't bind to 'ngModel' since it isn't a known property of 'input'.
To solve:
Import FormsModule in AppModule to use banana in a box `[(ngModel)]`

## Pipes

Used for data formatting.
Shortcut `ng g p pipe_name`

## Bootstrap

3.3 -> Glyphicons

## Component API

A component is said to have an API if there are input and output properties.

### Input

1. Use @Input
2. Use component metadata

### Input alias

1. To allow hypenated variables in component html.
2. To rename variables for refactoring purposes.

## Templates

1. Use when you have more than 5 lines of html in template.

## Styles

Last style added has maximum priority.
Any styles in template will get precedence as per CSS rules.
View encapsulation - It prevents the styles leaking to outer world (Shadow DOM in new browsers).

## ng-container

Use when you don't want any markup around the HTML components.

## Safe traversal

Used when you are traversing complex objects and items maybe null.

## Directive

Shortcut `ng g d directive-name`

## Form control

Two ways

1. Directives - forms built this way is template driven. Simpler but less control.
2. Code - forms built this way is reactive. Complex but more control.

## ngModelGroup

For complex objects.