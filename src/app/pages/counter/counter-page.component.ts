import {ChangeDetectionStrategy, Component, signal} from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  standalone: true,
  styleUrls: ['./counter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  counter = 10
  counterSignal = signal(10)



  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( current => current + value );
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0)
  }
}
