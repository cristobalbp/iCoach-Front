import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Institution } from '../../models/institution';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-allow-access',
  templateUrl: './allow-access.component.html',
  styleUrls: ['./allow-access.component.css'],
  providers: [InstitutionService]

})
export class AllowAccessComponent implements OnInit {
  public institution: Institution;
  public status: string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _institutionService: InstitutionService
  ) { 
    this.institution = new Institution("","","","","","yes",null,null,null,null,null,null,null,null,null,null,null);
  }

  ngOnInit() {
  }
  onSubmit() {
    // logear al usuario
    this._institutionService.allowAccess(this.institution).subscribe(
      response => {
        this.identity = response.institution;
        console.log(this.identity);
        if (!this.identity || !this.identity._id) {
          this.status = 'err';
        } else {
          // persistencia datos
          localStorage.setItem('identity', JSON.stringify(this.identity));
         
          // conseguir el token
          this.getToken();
                    this._router.navigate(['/register-coachee']);

        }
        console.log(response.institution);


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
    this._institutionService.allowAccess(this.institution, 'true').subscribe(
      response => {
        this.token = response.token;
        console.log(this.token);

        if (this.token <= 0) {
          this.status = 'err';
        } else {
          // persistencia token 
         
          localStorage.setItem('token', this.token);
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
}
