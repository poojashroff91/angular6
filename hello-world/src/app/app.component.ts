import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'app';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed:", eventArgs);
  }

  tweet = {
    isLiked: false,
    likesCount: 0
  }*/

  // courses = [1, 2];
  viewMode="map";

  courses;
  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id: undefined;
  }

  canSave = false;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

}
