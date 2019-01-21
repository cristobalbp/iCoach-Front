import { Component, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../../models/message';
import { MessageService } from '../../../services/message.service';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Follow } from '../../../models/follow';
import { FollowService } from '../../../services/follow.service';
import { GLOBAL } from '../../../services/global';
import { Input } from '@angular/core';
declare var tinymce: any;

@Component({
	selector: 'add',
	templateUrl: './add.component.html',
	providers: [FollowService, MessageService]
})
export class AddComponent implements OnInit {
	@Input() tinymce: string;
	public title: string;
	public message: Message;
	public identity;
	public token;
	public url: string;
	public status: string;
	public follows;

	@Output() onEditorKeyup = new EventEmitter<any>();
  	public editor:any;


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _followService: FollowService,
		private _messageService: MessageService,
		private _userService: UserService
	){
		this.title = 'Enviar';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;


		var text = '';
		if(window.location.href.indexOf('resultado') !== -1){
			text = (window.location.href);
		}

		this.message = new Message('', text,'','',this.identity._id,'');
	}

	ngOnInit(){
		console.log('add.component cargado...');
		this.getMyFollows();
	}

	onSubmit(form){
		this._messageService.addMessage(this.token, this.message).subscribe(
			response => {
				if(response.message){
					this.status = 'success';
					form.reset();
				}
			},
			error => {
				this.status = 'error';
				console.log(<any>error);
			}
		);
	}

	getMyFollows(){
		this._followService.getMyFollows(this.token).subscribe(
			response => {	
				this.follows = response.follows;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
/*Editor!! 
	ngAfterViewInit() {
		tinymce.init({
			selector:'textarea',
			setup: editor => {
			this.editor = editor;
			editor.on('keyup', () => {
				const content = editor.getContent();
				this.onEditorKeyup.emit(content);
			})
			}
		});
		/*var text = '';
		if(window.location.href.indexOf('resultado') !== -1){
		}
				tinymce.activeEditor.setContent('<p>' + window.location.href + '</p>');

		

	}

	ngOnDestroy() {
		tinymce.remove(this.editor);
	}
*/

}