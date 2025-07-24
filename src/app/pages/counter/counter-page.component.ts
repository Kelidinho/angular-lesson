import  { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  standalone: true,
  styleUrls: ['./counter-page.component.scss']
})

export class CounterPageComponent {
  counter = 10

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
