import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public userService:UsersService) {}

  onSetToActive(id: number) {
    this.userService.activeUsers.push(this.userService.inactiveUsers[id]);
    this.userService.inactiveUsers.splice(id, 1);
  }
}
