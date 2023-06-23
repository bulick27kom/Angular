import { Component, OnInit } from '@angular/core';
import { UsersServise } from '../services/users/users.servise';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
})
export class ActiveUsers implements OnInit {
  users = [];
  constructor(private usersServise: UsersServise) {}

  ngOnInit() {
    this.users = this.usersServise.users;
  }

  onChangeActiveStatus(index) {
    this.usersServise.changeUserStatus(index);
  }
}
