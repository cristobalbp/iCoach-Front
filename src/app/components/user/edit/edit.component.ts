import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { GLOBAL } from '../../../services/global';
 

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	providers: [UserService, UploadService],
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	public title: string;
	public user: User;
	public identity;
	public token;
	public status: string;
	public url: string;
	


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _uploadService: UploadService
	) {
		this.title = "Actualiza tus datos";
		this.user = this._userService.getIdentity();
		this.identity = this.user;
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit() {
		console.log(this.user);
		console.log("el componente editar usuario esta cargado");
	}

	onSubmit() {
		console.log(this.user);
		this._userService.updateUser(this.user).subscribe(
			res => {
				if (!res.user) {
					this.status = 'err';
				} else {
					this.status = 'success';
					localStorage.setItem('identity', JSON.stringify(this.user));
					this.identity = this.user;

					//subida de imagen de usuario
					this._uploadService.makeFileRequest(this.url+'upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image').then((result: any) =>{
															this.user.image = result.user.image;
															localStorage.setItem('identity', JSON.stringify(this.user));
														});
				}
			},
			err => {
				var error_message = <any>err;
				console.log(error_message);
				if (error_message !== null) {
					this.status = 'error';
				}
			}
		);
	}
	public filesToUpload: Array<File>;
	fileChangeEvent( fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;

	}

}
