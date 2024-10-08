import { Component, Output, EventEmitter, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

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
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService);
  
  onCompleteTask() {
    // this.complete.emit(this.task.id);
  }
}
