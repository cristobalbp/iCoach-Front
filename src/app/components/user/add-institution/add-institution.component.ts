import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Institution } from '../../../models/institution';
import { InstitutionService } from '../../../services/institution.service';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.css'],
  providers: [InstitutionService]
})
export class AddInstitutionComponent implements OnInit {
  public institution: Institution;
  public status: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _institutionService: InstitutionService,
  ) {
    this.institution = new Institution("","","","","","",null,null,null,null,null,null,null,null,null,null,null);
   }

   ngOnInit() {
  }
  onSubmit(registerForm){
        this._institutionService.addInstitution(this.institution).subscribe(
          response => {
            if(response.institution && response.institution._id){
              console.log(response.institution);
              this.status = 'error';
              registerForm.reset(); 
            }else{
              this.status = 'success';
            }
          },
          err => {
            console.log(<any> err)
          }
        );
  }

}
