import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test3 } from '../models/test3';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class Test3Service {

  public url: string;
  public identity;
  public token;
  public stats;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = GLOBAL.url; 
  }
  saveTest3(test3: Test3): Observable <any> {
    let params = JSON.stringify(test3);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.getToken());
    return this._http.post(this.url + 'savetest3', params, { headers: headers });
  }
// obtener test por id
  getTest3(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
		return this._http.get(this.url + 'gettest3/'+ id , {headers: headers});
  }
 // listar todos los test 
  getTests3(token, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
      
    return this._http.get(this.url + 'my-test3/' + page, { headers: headers });
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
    getIdentity() {
      const identity = JSON.parse(localStorage.getItem('identity'));
      if (identity !== 'undefined') {
        this.identity = identity;
      } else {
        this.identity = null;
      }
      return this.identity;
    }
}
