import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InstitutionService } from './../../../services/institution.service';
import { UserService } from './../../../services/user.service';
import { GLOBAL } from './../../../services/global';
import { Institution } from './../../../models/institution';
import { User } from './../../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-resultadoinst',
  templateUrl: './resultadoinst.component.html',
  styleUrls: ['./resultadoinst.component.css'],
  providers: [InstitutionService]

})
export class ResultadoinstComponent implements OnInit {
  public url: string;
  public institution: Institution;
  public user: User;
  public identity3;
  public token;
  public barChartData: any;
  public barChartLegend: any;
  public barChartType: any;
  public barChartLabels: any;
  public barChartOptions: any;
  barChartData2: { data: number[]; label: string; }[];


  constructor(
    private _institutionService: InstitutionService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getReportsInstitutionPersonality(id);
    });

  }

  getReportsInstitutionPersonality(id) {
    this._institutionService.getInstitution(id).subscribe(
      response => {
        if (response.institution) {
          this.institution = response.institution;
          console.log(this.institution);
          
          // chart
          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;

          this.barChartData = [
            { data: [+this.institution.reformador], label: 'reformador' },
            { data: [+this.institution.ayudador], label: 'ayudador' },
            { data: [+this.institution.triunfador], label: 'triunfador' },
            { data: [+this.institution.artista], label: 'artista' },
            { data: [+this.institution.pensador], label: 'pensador' },
            { data: [+this.institution.leal], label: 'leal' },
            { data: [+this.institution.entusiasta], label: 'entusiasta' },
            { data: [+this.institution.protector], label: 'protector' },
            { data: [+this.institution.pacifico], label: 'pacifico' },
            { data: [0], label: ''}
          ];

          this.barChartData2 = [
            { data: [+this.institution.visual], label: 'visual' },
            { data: [+this.institution.cinestesico], label: 'cinestesico' },
            { data: [+this.institution.auditivo], label: 'auditivo' },
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
