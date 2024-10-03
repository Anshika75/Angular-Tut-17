import { TaskService } from './../../../../../01-starting-project/src/app/tasks/task.service';
import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  constructor(private tasksService: TaskService) {}

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description});
    this.formEl()?.nativeElement.reset();
  }
}
