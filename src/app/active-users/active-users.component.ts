import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 
  constructor(public userService:UsersService){}

  onSetToInactive(id: number) {
    this.userService.inactiveUsers.push(this.userService.activeUsers[id]);
    this.userService.activeUsers.splice(id, 1);
  }
}
