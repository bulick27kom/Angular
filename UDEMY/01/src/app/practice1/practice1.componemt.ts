import { Component } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.componemt.html',
  styleUrls: [],
})
export class Practice1Componemt {
  username: string = '';

  resetUserName() {
    this.username = '';
  }
}
