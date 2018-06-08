
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
        <hr>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <hr>
        {{course.title | uppercase | lowercase}} <br/>
        {{course.rating | number:'1.2-2' }} <br/>
        {{course.students | number}} <br/>
        {{course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{course.releaseDate | date}} <br/>
        <hr>
        {{ text | summary:10 }}
        <hr>
        <span class="glyphicon" [class.glyphicon-star-empty]="!isFavorite" (click)="toggleFavorite()" ></span>
        <span class="glyphicon" [class.glyphicon-star]="isFavorite"  (click)="toggleFavorite()"></span>


    `
})
export class CoursesComponent {

    title = "List of courses";
    colSpan = 2;
    isActive = true;
    courses;
    email = "me@example.com";
    isFavorite = false;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 20123,
        price: 190.95,
        releaseDate: new Date(2016, 1, 1)
    }

    text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
    like Aldus PageMaker including versions of Lorem Ipsum.`;

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

    toggleFavorite(){
        this.isFavorite = !this.isFavorite;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
     
}