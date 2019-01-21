import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';
import { Task} from '../../../models/task';
import { TaskService } from '../../../services/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [UserService, TaskService]

})
export class TaskComponent implements OnInit {
	public identity;
	public token;
	public stats;
	public url;
	public status;
	public task: Task;
	public pages;
	public total;
	public page;

  constructor(
  	private _userService: UserService,
    private _taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router
  	) { 

  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	this.stats = this._userService.getStats();
  	this.url = GLOBAL.url;
  	this.task = new Task("","","",this.identity._id);
  	this.page = 1;

  }

  ngOnInit() {
  }

 onSubmit(registerForm){
        this._taskService.addTask(this.token, this.task).subscribe(
          response => {
            if(response.task && response.task._id){
              console.log(response.task);
              this.status = 'error';
              registerForm.reset(); 
            }else{
              this.status = 'success';
            }
          },
          err => {
            console.log(<any> err)
          }
        );
  }
  

   

}
