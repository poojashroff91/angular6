
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <table>
            <tr>
                <td [attr.colspan] = "colSpan"></td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor] = "isActive ? 'blue' : 'white' " (click)="onSave($event)" >Save</button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {

    title = "List of courses";
    colSpan = 2;
    isActive = true;
    courses;
    email = "me@example.com";

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp(){
        console.log('Enter was pressed');
        console.log(this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
     
}