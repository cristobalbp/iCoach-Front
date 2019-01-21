import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';


@Component({
  selector: 'users',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService]
})
export class ContactComponent implements OnInit {
	public title: string;
  public url: string;
	public identity;
	public token;
	public page;
	public next_page; 
	public prev_page;
	public status: string;
	public total;
	public pages;
	public users: User[];
  public searchText : string;
  

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService
  	) {
  	this.title = 'Coach que trabajan ';
    this.url = GLOBAL.url;
  	this.identity = this._userService.getIdentity();

   }

  ngOnInit() {
  	console.log('componente cargado contact');
  	this.actualPage();
  }
  actualPage(){
  	this._route.params.subscribe(params => {
  		let page = +params['page'];
  		this.page = page;
      if (!params['page']) {
        page = 1;
      }

  		if (!page) {
  			page = 1;
  		}else{
  			this.next_page = page + 1;
  			this.prev_page = page - 1;

  				if (this.prev_page <= 0) {
  				this.prev_page = 1;
  				}
  		}
  		//devolver listado de usuarios
  		this.getAllUsers(page);
  	});
  }
  getAllUsers(page){

  	this._userService.getAllUsers(page).subscribe(
  	response => {
  		if(!response.users){
  			this.status = 'error';
  		}else{
  			this.total = response.total;
  			this.users = response.users;
  			this.pages = response.pages;
  			if(page > this.pages){
  				this._router.navigate(['/contacto', 1]); 
  			}
  		}
  	},
  	error => {
  		var errorMessage = <any>error;
  		console.log(errorMessage);
  		if(errorMessage != null){
  			this.status = 'error';
  		}
  	}
  	);
  }

}
