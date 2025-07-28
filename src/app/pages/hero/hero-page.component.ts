import {ChangeDetectionStrategy, Component, computed, signal} from "@angular/core";
import {UpperCasePipe} from "@angular/common";

@Component({
  templateUrl: "./hero-page.component.html",
  styleUrls: ["./hero-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ UpperCasePipe ],
})
export class HeroPageComponent {
  public name = signal('ironman');
  public age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

  changeAge(): void {
    this.age.update(current => 22);
  }

  changeHero(): void {
    this.name.set('Spiderman');
  }

  resetForm(): void {
    this.name.set('ironman');
    this.age.set(45);
  }

}
