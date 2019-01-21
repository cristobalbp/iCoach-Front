import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';
import { BugsReport} from '../../../models/bugsreport';
import { BugsreportService } from '../../../services/bugsreport.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadService } from '../../../services/upload.service';



@Component({
  selector: 'app-bugsreport',
  templateUrl: './bugsreport.component.html',
  styleUrls: ['./bugsreport.component.css'],
  providers: [ UserService, BugsreportService, UploadService ]
})
export class BugsreportComponent implements OnInit {
	public identity;
	public token;
	public stats;
	public url;
	public status;
  public bugsreport: BugsReport;
  
  constructor(
    private _userService: UserService,
    private _bugsReportService: BugsreportService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	this.stats = this._userService.getStats();
  	this.url = GLOBAL.url;
  	this.bugsreport = new BugsReport("","","","",this.identity._id);
   }

  ngOnInit() {
  }
  onSubmit(form, $event){
    this._bugsReportService.saveBug(this.token, this.bugsreport).subscribe(
      response => {
        if(response.bugsreport){
          
          if(this.filesToUpload && this.filesToUpload.length){
          //Subir imagen
          this._uploadService.makeFileRequest(this.url+'upload-image-bug/'+response.bugsreport._id, [], this.filesToUpload, this.token, 'image')
                             .then((result:any) => {
                                 this.status = 'success';
                                 this.bugsreport.file = result.image;
                                 form.reset();
                                 this.sended.emit({send:'true'});
                               });
          }else{
                       this.status = 'success';
            form.reset();
            this.sended.emit({send:'true'});
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
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  //Output
  @Output() sended = new EventEmitter();
  sendBug(event){
    console.log(event);
    this.sended.emit({sended:'true'});
  }

}
