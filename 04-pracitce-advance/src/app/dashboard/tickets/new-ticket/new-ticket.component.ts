import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // onSubmit(titleElement: HTMLInputElement) {
  //   const enteredTitle = titleElement.value;
  //   console.log('Entered Title: ' + enteredTitle);
  //   // console.log('Form submitted');
  //   // Submit the form
  // }

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string, text: string}>();

  onSubmit(title: string, description: string) {
    // console.log('Entered Title: ' + title);
    // console.log('Entered Description: ' + description);
    this.add.emit({title: title, text: description});
    this.form().nativeElement.reset();
  }
}
