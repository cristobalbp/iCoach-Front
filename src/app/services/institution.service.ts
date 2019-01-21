import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Institution } from '../models/institution';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  public url: string;
  public identity2;
  public token;
  public stats;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
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
  getIdentity2() {
    const identity2 = JSON.parse(localStorage.getItem('identity'));
    if (identity2 !== 'undefined') {
      this.identity2 = identity2;
    } else {
      this.identity2 = null;
    }
    return this.identity2;
  }

  addInstitution(institution: Institution): Observable<any> {
    const params = JSON.stringify(institution);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.getToken());

    return this._http.post(this.url + 'save-institution', params, { headers: headers });
  }

  // obtener instituciones por id
  getInstitution(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
		return this._http.get(this.url + 'get-institution/'+ id , {headers: headers});
  }
 // listar todos los instituciones con las que trabaja el user 
 getInstitutions(token, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
      
    return this._http.get(this.url + 'my-institutions/' + page, { headers: headers });
  }

   allowAccess(institution: Institution, gettoken = null): Observable<any> {
    if (gettoken != null) {
      institution.gettoken2 = gettoken;
    }
    const params = JSON.stringify(institution);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'allow-access', params, { headers: headers });
  }

}


