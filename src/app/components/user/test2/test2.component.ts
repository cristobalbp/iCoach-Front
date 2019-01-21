import { Component, OnInit } from '@angular/core';
import { Test2 } from './../../../models/test2'; 
import { Test2Service } from './../../../services/test2.service'; 
import { NgForm } from '@angular/forms';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'], 
  providers: [Test2Service] 
})
export class Test2Component implements OnInit {
  public foo  = [{ 0: 'hiena' }, { 1: 'perro'}, { 2: 'bufalo' }, {3: 'leon'}];
  public test2: Test2;
  public h = 0; //hiena
  public p = 0; //perro
  public b = 0; //bufalo
  public l = 0; //leon
  public identity;
  public testForm;
  public status: string;

  answers: Object;

  constructor(
    private _test2Service: Test2Service  
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
      40: ""
    }

   }

  ngOnInit() {
  }

  guardar(forma){
    for (let a of Object.keys(this.answers)) {
      switch (this.answers[a]) {
        case 1:
          this.h++
          break;
        
        case 2:
          this.p++
          break

        case 3:
          this.b++
          break
        
        case 4:
          this.l++
          break

        default:
          console.log("No hay valor correspondiente", a)
          break;
      }
    }

    console.log("hiena", this.h);
    console.log("perro", this.p);
    console.log("Búfalo", this.b);
    console.log("León", this.l);

    forma.reset(); 

 this.test2 = new Test2("",this.h.toString(),this.p.toString(),this.b.toString(),this.l.toString(),"","");

console.log("Test2", this.test2)

 console.log(this.test2);

    this._test2Service.saveTest2(this.test2).subscribe(
      response => {
        if(response.test2 && response.test2._id){
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
