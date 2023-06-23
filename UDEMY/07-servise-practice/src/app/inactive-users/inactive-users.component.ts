import { Component, OnInit } from '@angular/core';
import { UsersServise } from '../services/users/users.servise';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  constructor(private usersServise: UsersServise) {}

  ngOnInit() {
    this.users = this.usersServise.users
  }

  onChangeActiveStatus(index) {

    this.usersServise.changeUserStatus(index);
  }
}
