import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({providedIn: 'root'})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) {}

  getPosts() {
    return this
      .http
      .get(this.url)
      .catch(this.handleError);
  }

  createPost(post) {
    return this
      .http
      .post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post) {
    return this
      .http
      .patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(post) {
    return this
      .http
      .delete(this.url + '/' + post.id)
      .catch(this.handleError);
  }

  private handleError(error : Response) {

    if (error.status === 404) 
      return Observable.throw(new NotFoundError());
    
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    return Observable.throw(new AppError(error));

  }
}
