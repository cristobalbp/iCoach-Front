import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-perfil',
  templateUrl: './public-profile.html',
  styleUrls: ['./public-profile.css'],
  providers: [UserService]
})
export class PublicProfileComponent implements OnInit {
public url: string;
public user: User; 
  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService) { 
  		this.url = GLOBAL.url;
  	}

  ngOnInit() {
  	this._route.params.subscribe(params => {
  		let id = params.id;
  		this.getUserW(id);
  	});
  }

  getUserW(id){
  	this._userService.getUserW(id).subscribe(
  			response => {
  				this.user = response.user;

  			},
  			err => {
  				console.log(err);
  			}
  		)
  }

}
