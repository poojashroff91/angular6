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

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];
  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

}
