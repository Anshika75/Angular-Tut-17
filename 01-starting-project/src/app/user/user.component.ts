import { Component, signal, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { user } from './user.model';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// interface user {
//   id: string;
//   name?: string | undefined;
//   avatar: string;
// }
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: user;
  // @Input({required: true}) user!:{
  //   id: string;
  //   name?: string | undefined;
  //   avatar: string;
  // };
  // avatar = input<string>("");
  // name = input<string>("John Doe");
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectedUser() {
    this.select.emit(this.user.id);
    // console.log('User selected: ', this.selectedUser.name);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
