import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponentCoachee implements OnInit {
  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User("","","","","","","","","","",null,/*Aqui comienza Coach*/ null,null,null, null, null, null, null, null, null,null/*Aqui comienza Coachee*/, "" ,"","",0,"");
  }

  ngOnInit() {
  }
  onSubmit() {
    // logear al usuario
    this._userService.signUp(this.user).subscribe(
      response => {
        this.identity = response.user;
        console.log(this.identity);
        if (!this.identity || !this.identity._id) {
          this.status = 'err';
        } else {
          // persistencia datos de usuario
          localStorage.setItem('identity', JSON.stringify(this.identity));
         
          // conseguir el token
          this.getToken();
        }
        console.log(response.user);


      },
      err => {
        const errMessage = <any>err;
        console.log(errMessage);

        if (errMessage != null) {
          this.status = 'err';
        }

      }
    );
  }
  getToken() {
    this._userService.signUp(this.user, 'true').subscribe(
      response => {
        this.token = response.token;
        console.log(this.token);

        if (this.token <= 0) {
          this.status = 'err';
        } else {
          // persistencia token de usuario
         
          localStorage.setItem('token', this.token);
          this._router.navigate(['']);
          // conseguir las estadisticas del usuario
          this.getCounters();
        }
      },
      err => {
        const errMessage = <any>err;
        console.log(errMessage);

        if (errMessage != null) {
          this.status = 'err';
        }

      }
    );
  }
  
  getCounters() {
    this._userService.getCounters().subscribe(
      response => {
          console.log(response);
          localStorage.setItem('stats', JSON.stringify(response));
          this.status = 'success';
          this._router.navigate(['']); // redireccion una vez logeado
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  
}
