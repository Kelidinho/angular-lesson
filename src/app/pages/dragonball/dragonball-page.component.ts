import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Character {
  id: number
  name: string
  power: number
}
@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.scss'
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
/*    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Piccolo', power: 3001 },
    { id: 4, name: 'Yamcha', power: 500 }*/
  ])

  public characterForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    power: new FormControl<number>(0, [Validators.required, Validators.min(0)])
  });

  public visibleCharacters = computed(() => {
    return this.characters().filter(character => character.power > 500);
  });

  public addCharacter(): void {
    if (this.characterForm.invalid) return;

    const { name, power } = this.characterForm.getRawValue();

    const newCharacter: Character = {
      id: Date.now(), // ID temporal
      name: name!,
      power: power!
    };

    // Actualizamos la señal de personajes
    this.characters.update(current => [...current, newCharacter]);

    // Reseteamos el formulario
    this.characterForm.reset({ name: '', power: 0 });
  }
}
