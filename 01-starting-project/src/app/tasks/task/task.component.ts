import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from './task.model';

// interface Task {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
