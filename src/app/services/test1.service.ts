import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test1 } from '../models/test1';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {
  public url: string;
  public token;
  public stats;
  public identity3;

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  saveTest1(test1: Test1): Observable <any> {
    let params = JSON.stringify(test1);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.getToken());
    return this._http.post(this.url + 'savetest1', params, { headers: headers });
  }

  getTest(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
		return this._http.get(this.url + 'gettest1/'+ id , {headers: headers});
  }
  
  getTests(token, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
      
    return this._http.get(this.url + 'my-test/' + page, { headers: headers });
  }

  getIdentity3() {
    const identity3 = JSON.parse(localStorage.getItem('identity3'));
    if (identity3 !== 'undefined') {
      this.identity3 = identity3;
    } else {
      this.identity3 = null;
    }
    return this.identity3;
  }

  getToken() {
    const token = localStorage.getItem('token');
      if (token !== undefined) {
      this.token = token;
      } else {
      this.token = null;
      }
      return this.token;
    }
  

    
}