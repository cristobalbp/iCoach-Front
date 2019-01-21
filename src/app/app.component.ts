import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Test1Service } from './services/test1.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, Test1Service]
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;
  public identity3;
  public url: string;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'iCoach';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();

    console.log(this.identity);

  }
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
 
  }
  logOut() {
  localStorage.clear();
  this.identity = null;

  this._router.navigate(['/inicio']);
  }
}
