import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Publication } from '../models/publication';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
public url: string;

constructor(
  private _http: HttpClient
) {
  this.url = GLOBAL.url;
  }
addPublication(token, publication): Observable<any> {
  const params = JSON.stringify(publication);
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', token);
  return this._http.post(this.url + 'publication', params, { headers: headers });
  }

getPublications(token, page = 1): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', token);

  return this._http.get(this.url + 'publications/' + page, {headers: headers });
  }
getPublicationsCoachee(token, page = 1): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', token);

  return this._http.get(this.url + 'publications-coachee/' + page, {headers: headers});
  }
   getPublicationsUser(token, user_id, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                     .set('Authorization', token);

    return this._http.get(this.url + 'publications-user/' + user_id + '/' + page, {headers: headers});
  }

  deletePublication(token, id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                     .set('Authorization', token);

    return this._http.delete(this.url + 'publication/' + id, {headers: headers});
  }

}
