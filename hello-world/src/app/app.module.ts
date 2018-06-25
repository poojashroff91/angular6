import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { PostService } from './services/post.service';


import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapitalComponent } from './capital/capital.component';
import { CapitalPipe } from './capital.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';    
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';

import { AppErrorHandler } from './common/app-error-handler';
import { FollowerComponent } from './follower/follower.component';
import { FollowerService } from './services/follower.service';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FollowerComponent
  ],
  imports: [
  

BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
