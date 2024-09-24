import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string | undefined;
  @Input({required: true}) name: string | undefined;
  isAddingTask = false;
  // private tasksService = new TaskService();
  constructor(private tasksService: TaskService) {}
  
  // Tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];

  get SelectedUserTasks() {
    // return this.Tasks.filter((task) => task.userId === this.userId);
    return this.userId ? this.tasksService.getUserTasks(this.userId) : [];
  }

  onCompleteTask(id: string) {
    // this.Tasks = this.Tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // if (this.userId) {
    //   this.Tasks.unshift({
    //     id: new Date().getTime().toString(),
    //     userId: this.userId,
    //     title: taskData.title,
    //     summary: taskData.summary,
    //     dueDate: taskData.dueDate,
    //   });
      this.isAddingTask = false;
    // } else {
    //   console.error('userId is undefined');
    // }
  }
}
