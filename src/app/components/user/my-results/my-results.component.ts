import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Test1 } from './../../../models/test1';
import { Test2 } from './../../../models/test2';
import { Test3 } from './../../../models/test3';

import { Test1Service } from './../../../services/test1.service';
import { Test2Service } from './../../../services/test2.service';
import { Test3Service } from './../../../services/test3.service';

import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { GLOBAL } from './../../../services/global';


@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.css'],
  providers: [UserService, Test1Service, Test2Service]
})
export class MyResultsComponent implements OnInit {
  public title: string;
  public identity;
  public token;
  public url: string;
  public status: string;
  public test1: Test1[];  
  public test2: Test2[];
  public test3: Test3[];
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
    private _testService: Test1Service,
    private _testService2: Test2Service,
    private _testService3: Test3Service

  ) {
    this.title = 'Resultados de mis test'
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.page = 1;
   }

  ngOnInit() {
    console.log('resultados component cargado');
    this.getTest1(this.page);
    this.getTest2(this.page);
    this.getTest3(this.page);

  }

  //obtener test de estilos de aprendizaje

  getTest1(page){
    this._testService.getTests(this.token, page).subscribe(
      response => {
        console.log(response);
        if(response.test1){
          this.test1 = response.test1;
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
  //obtener test de liderazgo
  getTest2(page){
    this._testService2.getTests2(this.token, page).subscribe(
      response => {
        console.log(response);
        if(response.test2){
          this.test2 = response.test2;
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

  getTest3(page){
    this._testService3.getTests3(this.token, page).subscribe(
      response => {
        console.log(response);
        if(response.test3){
          this.test3 = response.test3;
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
