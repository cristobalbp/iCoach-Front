import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;
  
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    
  ) {

    this.user = new User("","","","","","","","","","",null,/*Aqui comienza Coach*/ "yes",false,false, false, false, "", "", "", "",""/*Aqui comienza Coachee*/, null,null,null,null,null);
   }

  ngOnInit() {

  }
  onSubmit(registerForm){
        this._userService.register(this.user).subscribe(
          response => {
            if(response.user && response.user._id){
              //console.log(response.user);
              this.status = 'success';
              registerForm.reset(); 
            }else{
              this.status = 'error';
            }
          },
          err => {
            console.log(<any> err)
          }
        );
  }

}
