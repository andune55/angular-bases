import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

    public deletedLastHero?: string;

    removeLastHero ():void {
      this.deletedLastHero = this.heroNames.pop();
    }

}
