import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Message } from '../models/message';

@Injectable()
export class MessageService {
  public url: string;
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
  addMessage(token, message): Observable<any> {
    const params = JSON.stringify(message);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this._http.post(this.url + 'message', params, { headers: headers });
  }

  getMyMessages(token, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.get(this.url + 'my-messages/' + page, { headers: headers });
  }

  getEmmitMessages(token, page = 1): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.get(this.url + 'messages/' + page, { headers: headers });
  }
}
