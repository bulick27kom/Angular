import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponenet {
  gameState: 'started' | 'stopped' = 'stopped';

  counter: number = 0;

  @Output() changeCounter = new EventEmitter<number>();

  refInterval;

  onStartGame() {
    if (this.gameState === 'stopped') {
      this.refInterval = setInterval(() => {
        this.counter++;
        this.changeCounter.emit(this.counter)
      }, 1000);
      this.gameState = 'started';
    }
  }

  onStopGame() {
    if (this.gameState === 'started') {
      clearInterval(this.refInterval);
      this.gameState = 'stopped';
    }
  }
}
