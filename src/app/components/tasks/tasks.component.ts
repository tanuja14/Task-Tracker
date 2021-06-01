import { Component, OnInit } from '@angular/core';
import{TasksService} from '../../services/tasks.service';

import{Task} from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[]=[];
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
   this.tasksService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }
 deleteTask(task: Task){
  this.tasksService
  .deleteTask(task).
  subscribe(
    ()=>(this.tasks = this.tasks.filter(
       t=> t.id !== task.id)));
 }

 ToggleTask(task: Task){
  task.reminder=!task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
 }
   addTask(task: Task){
    this.tasksService.addTask(task).subscribe((task)=>this.tasks.push(task));

   }
}
