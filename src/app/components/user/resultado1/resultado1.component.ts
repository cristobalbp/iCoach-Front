import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Test1Service } from './../../../services/test1.service';
import { UserService } from './../../../services/user.service';
import { GLOBAL } from './../../../services/global';
import { Test1 } from './../../../models/test1';
import { User } from './../../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-resultado1',
  templateUrl: './resultado1.component.html',
  styleUrls: ['./resultado1.component.css'],
  providers: [Test1Service, UserService]
})
export class Resultado1Component implements OnInit {
  public url: string;
  public test1: Test1;
  public user: User;
  public identity3;
  public token;
  public barChartData: any;
  public barChartLegend: any;
  public barChartType: any;
  public barChartLabels: any;
  public barChartOptions;
  public identity: any;

  constructor(
    private _test1Service: Test1Service,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.url = GLOBAL.url;
    /* this.barChartData = [
      {
        data: [],
        label: 'auditivo'
      },
      {
        data: [],
        label: 'visual'
      },
      {
        data: [],
        label: 'cinestesico'
      }
    ] */
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getTest(id);
    });
    this.identity = this._userService.getIdentity();

  }

 

  getTest(id) {
    this._test1Service.getTest(id).subscribe(
      response => {
        if (response.test1) {
          this.test1 = response.test1;
          console.log(this.test1);
          
          // chart
          this.barChartOptions = {
            maintainAspectRatio: false,
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;

          this.barChartData = [
            { data: [+this.test1.auditivo], label: 'auditivo' },
            { data: [+this.test1.visual], label: 'visual' },
            { data: [+this.test1.cinestesico], label: 'cinestesico' },
            { data: [0], label: ''}



          ];
          //Fin del chart
        } else {
          status = 'error';
        }
      },
      err => {
        console.log(<any>err);
        //this._router.navigate(['/resultado1', this.identity3._id]);
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
    doc.save('estilosdeaprendizaje.pdf');
  }
}