import { Component, OnInit  } from '@angular/core';
import { Test1 } from './../../../models/test1';
import { Test1Service } from './../../../services/test1.service';
import { NgForm } from '@angular/forms';
import { GLOBAL } from '../../../services/global';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  providers: [Test1Service]
})
export class Test1Component implements OnInit {

public foo  = [{ 0: 'visual' }, { 1: 'cinestecico'}, { 2: 'auditivo' }];
 
public test1: Test1;
public c = 0;
public v = 0;
public au = 0;
public identity;
public testForm;
public status: string;


  answers: Object;


  constructor(
    private _test1Service: Test1Service 
  ) {

    this.answers = {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: "",
      21: "",
      22: "",
      23: "",
      24: "",
      25: "",
      26: "",
      27: "",
      28: "",
      29: "",
      30: "",
      31: "",
      32: "",
      33: "",
      34: "",
      35: "",
      36: "",
      37: "",
      38: "",
      39: "",
    }
   }

  ngOnInit() {
  }

  guardar(forma){

    for (let a of Object.keys(this.answers)) {
      switch (this.answers[a]) {
        case 1:
          this.c++
          break;
        
        case 2:
          this.v++
          break

        case 3:
          this.au++
          break

        default:
          console.log("No hay valor correspondiente", a)
          break;
      }
    }

    console.log("Cinestesico", this.c)
    console.log("Visual", this.v)
    console.log("Auditivo", this.au)

    this.test1 = new Test1("",this.au.toString(),this.v.toString(),this.c.toString(),"","");

    console.log("Test1", this.test1)

    console.log(this.test1);

    this._test1Service.saveTest1(this.test1).subscribe(
      response => {
        if(response.test1 && response.test1._id){
          //console.log(response.user);
          this.status = 'success';
          forma.reset(); 
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
