import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Test2Service } from './../../../services/test2.service';
import { UserService } from './../../../services/user.service';
import { GLOBAL } from './../../../services/global';
import { Test2 } from './../../../models/test2';
import { User } from './../../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-resultado2',
  templateUrl: './resultado2.component.html',
  styleUrls: ['./resultado2.component.css'],
  providers: [Test2Service, UserService]

})
export class Resultado2Component implements OnInit {
  public url: string;
  public test2: Test2;
  public user: User;
  public identity3;
  public token;
  public barChartData: any;
  public barChartLegend: any;
  public barChartType: any;
  public barChartLabels: any;
  public barChartOptions: any;
  public identity;

  constructor(
    private _test2Service: Test2Service,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getTest2(id);
    });
    this.identity = this._userService.getIdentity();
  }

  getTest2(id) {
    this._test2Service.getTest2(id).subscribe(
      response => {
        if (response.test2) {
          this.test2 = response.test2;
          console.log(this.test2);
          
          // chart
          this.barChartOptions = {
            maintainAspectRatio: false,
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;

          this.barChartData = [
            { data: [+this.test2.hiena], label: 'Hiena' },
            { data: [+this.test2.perro], label: 'Perro' },
            { data: [+this.test2.bufalo], label: 'Bufalo' },
            { data: [+this.test2.leon], label: 'Leon' },
             { data: [0], label: ''}


          ];
          //Fin del chart
        } else {
          status = 'error';
        }
      },
      err => {
        console.log(<any>err);
      //this._router.navigate(['/resultado2', this.identity3._id]);
      }
    )
  }

  @ViewChild('content') content: ElementRef;
  downloadPDF(){
     let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element, renderer ){
        return true;
      }
    };
    let content = this.content.nativeElement;
    

    doc.fromHTML(content.innerHTML, 10, 10, {
      'width': 190,
      'elementHandlers': specialElementHandlers,
       
    }); 
    doc.save('liderazgo.pdf');
  }

}
