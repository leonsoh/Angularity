import { Component, input, output, Input, Output, computed, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  @Input({required: true}) id!: string;
  //@Output() select = new EventEmitter();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.avatar();
  })

  onSelectUser() {
    this.select.emit(this.id);
  }
}
