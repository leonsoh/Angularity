import { Component, input, output, Input, Output, computed, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  //@Output() select = new EventEmitter<string>();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.user.avatar;
  })

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
