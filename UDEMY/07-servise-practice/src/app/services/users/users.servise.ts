import { Injectable } from '@angular/core';
import { CounterServise } from '../counter/counter.service';

@Injectable()
export class UsersServise {
  users: { name: string; status: boolean }[] = [
    { name: 'Manu', status: true },
    { name: 'Chris', status: true },
    { name: 'Max', status: true },
    { name: 'Anna', status: false },
    { name: 'Piter', status: false },
  ];
  constructor(private counter: CounterServise) {}

  changeUserStatus(index: number) {
    this.users[index].status = !this.users[index].status;
    switch (this.users[index].status) {
      case false:
        this.counter.increaseInActiveCounter();
        break;
      case true:
        this.counter.increaseActiveCounter();
      default:
        break;
    }
  }
}
