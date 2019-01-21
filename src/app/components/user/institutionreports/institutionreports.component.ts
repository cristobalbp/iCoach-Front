import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Institution } from './../../../models/institution';
import { InstitutionService } from './../../../services/institution.service';
import { GLOBAL } from './../../../services/global';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-institutionreports',
  templateUrl: './institutionreports.component.html',
  styleUrls: ['./institutionreports.component.css'],
  providers: [InstitutionService, UserService]

})
export class InstitutionreportsComponent implements OnInit {
  public identity;
  public token;
  public url: string;
  public status: string;
  public institution: Institution[];  
  public total;
	public page;
  public pages;
  public next_page;
  public prev_page;
  @Input() user: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _institutionService: InstitutionService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.page = 1;
   }

  ngOnInit() {
    this.getInstitutions(this.page);

  }

  getInstitutions(page){
    this._institutionService.getInstitutions(this.token, page).subscribe(
      response => {
        console.log(response);
        if(response.institution){
          this.institution = response.institution;
          this.total = response.total_items;
          this.pages = response.pages;
          
          if(page > this.pages){
            this._router.navigate(['/mis-resultados']); 
          }

        }else{
          this.status = 'error';
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
