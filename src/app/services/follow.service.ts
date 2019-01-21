import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Follow } from '../models/follow';

@Injectable({
providedIn: 'root'
})
export class FollowService {
public url: String;
public identity;
public token;

constructor(private _http: HttpClient) {
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

// Agregar amigos
addFollow(token, follow): Observable<any> {
const params = JSON.stringify(follow);
const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
return this._http.post(this.url + 'follow', params, { headers: headers });
}
// Eliminar
deleteFollow(token, id): Observable<any> {
const headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Authorization', this.getToken());
return this._http.delete(this.url + 'follow/' + id, { headers: headers });
}

getFollowing(token, userId = null, page = 1): Observable<any> {
const headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Authorization', this.getToken());
let url = this.url + 'following';
if (userId != null) {
url = this.url + 'following/' + userId + '/' + page;
}
return this._http.get(url, { headers: headers });
}

getFollowed(token, userId = null, page = 1): Observable<any> {
const headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Authorization', this.getToken());
let url = this.url + 'followed';
if (userId != null) {
url = this.url + 'followed/' + userId + '/' + page;
}
return this._http.get(url, { headers: headers });
}

// Para las vistas de los mensajes para add.component
getMyFollows(token): Observable<any> {
const headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Authorization', this.getToken());
return this._http.get(this.url + 'get-my-follows/true', { headers: headers });
}
}
