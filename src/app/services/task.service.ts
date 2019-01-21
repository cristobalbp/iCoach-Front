import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
public url: string;

  constructor(
  	  private _http: HttpClient
) {
  	  this.url = GLOBAL.url;
 }

 addTask(token, task): Observable<any> {
  const params = JSON.stringify(task);
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', token);
  return this._http.post(this.url + 'task', params, { headers: headers });
  }

  getTask(token, page = 1): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', token);

  return this._http.get(this.url + 'gettask/' + page, {headers: headers });
  }

  deleteTask(token, id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                     .set('Authorization', token);

    return this._http.delete(this.url + 'task/' + id, {headers: headers});
  }

}
