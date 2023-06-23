export class CounterServise {
  activeCounter: number = 0;
  inActiveCounter: number = 0;

  increaseActiveCounter() {
    this.activeCounter++;
  }

  increaseInActiveCounter() {
    this.inActiveCounter++;
  }
}
