import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';
import { Task} from '../../../models/task';
import { TaskService } from '../../../services/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
    providers: [UserService, TaskService]

})
export class TaskListComponent implements OnInit {
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
    private _router: Router) { 

  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	this.stats = this._userService.getStats();
  	this.url = GLOBAL.url;
  	this.page = 1;
  }

  ngOnInit() {
  	this.getTasks(this.page);
  }

   getTasks(page){
    this._taskService.getTask(this.token, page).subscribe(
      response => {
        console.log(response);
        if(response.task){
          this.task = response.task;
          this.total = response.total_items;
          this.pages = response.pages;
          
          if(page > this.pages){
           this._router.navigate(['/tareas']);  // ruta de tareas
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

    deleteTask(id){
    this._taskService.deleteTask(this.token, id).subscribe(
      response => {
        this.refresh();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  refresh(event = null){
    this.getTasks(1);
  }

}
