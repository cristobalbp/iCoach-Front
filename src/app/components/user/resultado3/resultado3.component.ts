import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Test3Service } from './../../../services/test3.service';
import { UserService } from './../../../services/user.service';
import { GLOBAL } from './../../../services/global';
import { Test3 } from './../../../models/test3';
import { User } from './../../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-resultado3',
  templateUrl: './resultado3.component.html',
  styleUrls: ['./resultado3.component.css'],
  providers: [Test3Service, UserService]

})
export class Resultado3Component implements OnInit {
  public url: string;
  public identity;
  public test3: Test3;
  public user: User;
  public identity3;
  public token;
  public barChartData: any;
  public barChartLegend: any;
  public barChartType: any;
  public barChartLabels: any;
  public barChartOptions: any;

  constructor(
    private _test3Service: Test3Service,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getTest3(id);
    });
    
    this.identity = this._userService.getIdentity();

  }

  getTest3(id) {
    this._test3Service.getTest3(id).subscribe(
      response => {
        if (response.test3) {
          this.test3 = response.test3;
          console.log(this.test3);
          
          // chart
          this.barChartOptions = {
            maintainAspectRatio: false,
            scaleShowVerticalLines: false,
            responsive: true

          };
          this.barChartType = 'bar';
          this.barChartLegend = true;

          this.barChartData = [
            { data: [+this.test3.reformador], label: 'reformador' },
            { data: [+this.test3.ayudador], label: 'ayudador' },
            { data: [+this.test3.triunfador], label: 'triunfador' },
            { data: [+this.test3.artista], label: 'artista' },
            { data: [+this.test3.pensador], label: 'pensador' },
            { data: [+this.test3.leal], label: 'leal' },
            { data: [+this.test3.entusiasta], label: 'entusiasta' },
            { data: [+this.test3.protector], label: 'protector' },
            { data: [+this.test3.pacifico], label: 'pacifico' },
             { data: [0], label: ''}
          ];
          //Fin del chart
        } else {
          status = 'error';
        }
      },
      err => {
        console.log(<any>err);
        // this._router.navigate(['/resultado1', this.identity3._id]);
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
    doc.save('personalidad.pdf');
  }

}
