import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BugsReport } from '../models/bugsreport';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class BugsreportService {
  public url: string;

  constructor(
    private _http: HttpClient

  ) { 
    this.url = GLOBAL.url;
  }

  saveBug(token, bugsreport): Observable<any> {
    const params = JSON.stringify(bugsreport);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', token);
    return this._http.post(this.url + 'bugs', params, { headers: headers });
    }
}
