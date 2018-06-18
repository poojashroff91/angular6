
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Arts'},
    {id: 3, name: 'Language'},
  ]

  submit(f){
    console.log(f);
  }

}
