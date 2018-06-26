import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

import {map} from 'rxjs/operators'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({providedIn: 'root'})
export class DataService {

    constructor(private url : string, private http : Http) {}

    getAll() {
        return this
            .http
            .get(this.url)
            .pipe(map(response => {
                return response.json();
            }))
            .catch(this.handleError);
    }

    create(resource) {

        return this
            .http
            .post(this.url, JSON.stringify(resource))
            .pipe(map(response => {
                return response.json();
            }))
            .catch(this.handleError);
    }

    update(resource) {
        return this
            .http
            .patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
            .pipe(map(response => {
                return response.json();
            }))
            .catch(this.handleError);
    }

    delete(id) {
        return this
            .http
            .delete(this.url + '/' + id)
            .pipe(map(response => {
                return response.json();
            }))
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