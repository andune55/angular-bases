import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    //return 'Hola Mundo';
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero( nuevoNombre: string): void {
    this.name = nuevoNombre;
  }
  changeAge( nuevaEdad: number): void {
    this.age = nuevaEdad;
  }
  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
