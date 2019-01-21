import { Component, OnInit } from '@angular/core';
import { Test3 } from './../../../models/test3';
import { Test3Service } from './../../../services/test3.service';
import { NgForm } from '@angular/forms';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
  providers: [Test3Service]
})
export class Test3Component implements OnInit {
  public foo = [{ 0: 'reformador' }, { 1: 'ayudador' }, { 2: 'triunfador' }, { 3: 'artista' }, { 4: 'pensador' }, { 5: 'leal' }, { 6: 'entusiaste' }, { 7: 'protector' }, { 8: 'pacifico' }];
  public test3: Test3;
  public r = 0; //reformador
  public a = 0; //ayudador
  public t = 0; //triunfador
  public ar = 0; //artista
  public p = 0; //pensador
  public l = 0; //leal
  public e = 0; //entusiaste
  public pr = 0; //protector
  public pa = 0; //pacifico
  public identity;
  public testForm;
  public status: string;
  answers: Object;



  constructor(private _test3Service: Test3Service) {
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
      40: "",
      41: "",
      42: "",
      43: "",
      44: "",
      45: "",
      46: "",
      47: "",
      48: "",
      49: "",
      50: "",
      51: "",
      52: "",
      53: "",
      54: "",
      55: "",
      56: "",
      57: "",
      58: "",
      59: "",
      60: "",
      71: "",
      72: "",
      73: "",
      74: "",
      75: "",
      76: "",
      77: "",
      78: "",
      79: "",
      80: "",
      81: "",
      82: "",
      83: "",
      84: "",
      85: "",
      86: "",
      87: "",
      88: "",
      89: "",
      90: "",
      91: "",
      92: "",
      93: "",
      94: "",
      95: "",
      96: "",
      97: "",
      98: "",
      99: "",
      100: "",
      101: "",
      102: "",
      103: "",
      104: "",
      105: "",
      106: "",
      107: "",
      108: "",
      109: "",
      110: "",
      111: "",
      112: "",
      113: "",
      114: "",
      115: "",
      116: "",
      117: "",
      118: "",
      119: "",
      120: "",
      121: "",
      122: "",
      123: "",
      124: "",
      125: "",
      126: "",
      127: "",
      128: "",
      129: "",
      130: "",
      131: "",
      132: "",
      133: "",
      134: "",
      135: "",
      136: "",
      137: "",
      138: "",
      139: "",
      140: "",
      141: "",
      142: "",
      143: "",
      144: "",
      145: "",
      146: "",
      147: "",
      148: "",
      149: "",
      150: "",
      151: "",
      152: "",
      153: "",
      154: "",
      155: "",
      156: "",
      157: "",
      158: "",
      159: "",
      160: "",
      161: "",
      162: "",
      163: "",
      164: "",
      165: "",
      166: "",
      167: "",
      168: "",
      169: "",
      170: "",
      171: "",
      172: "",
      173: "",
      174: "",
      175: "",
      176: "",
      177: "",
      178: "",
      179: "",

    }
  }

  ngOnInit() {
  }

  guardar(forma) {
    for (let x of Object.keys(this.answers)) {
      switch (this.answers[x]) {
        case 1:
          this.r++
          break;

        case 2:
          this.a++
          break;

        case 3:
          this.t++
          break;

        case 4:
          this.ar++
          break;

        case 5:
          this.p++
          break;

        case 6:
          this.l++
          break;

        case 7:
          this.e++
          break;

        case 8:
          this.pr++
          break;

        case 9:
          this.pa++
          break;

        default:
          console.log("No hay valor correspondiente", x)
          break;
      }
    }

  console.log("reformador", this.r);
  console.log("ayudador", this.a);
  console.log("triunfador", this.t);
  console.log("artista", this.ar);
  console.log("pensador", this.p);
  console.log("leal", this.l);
  console.log("entusiaste", this.e);
  console.log("protector", this.pr);
  console.log("pacifico", this.pa); 

  forma.reset();

    this.test3 = new Test3("", this.r.toString(), this.a.toString(), this.t.toString(), this.ar.toString(),this.p.toString(),this.l.toString(),this.e.toString(),this.pr.toString(),this.pa.toString(), "", "");

console.log("Test3", this.test3)

console.log(this.test3);

this._test3Service.saveTest3(this.test3).subscribe(
  response => {
    if (response.test3 && response.test3._id) {
      //console.log(response.user);
      this.status = 'success';
      forma.reset();
    } else {
      this.status = 'error';
    }
  },
  err => {
    console.log(<any>err)
  }
);
  }

}
