import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { Institution } from 'src/app/models/institution';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, InstitutionService]
})
export class RegisterComponentCoachee implements OnInit {
  public user: User;
  public status: string;
  public identity2;
  public institution: Institution;
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _instititutionService: InstitutionService
    
  ) {
    this.user = new User("","","","","","","","","","",null,/*Aqui comienza Coach*/ null,null,null, null, null, null, null, null, null, null/*Aqui comienza Coachee*/, "" ,"","",0,"yes");
    
    this.identity2 = this._instititutionService.getIdentity2();
  }

  ngOnInit() {
  }


  onSubmit(registerForm){
    localStorage.setItem('identity2', JSON.stringify(this.institution));
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
