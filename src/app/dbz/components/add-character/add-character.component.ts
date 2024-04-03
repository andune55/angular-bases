import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public character: Character = {
    id: uuid(),
    name: 'Otro personaje',
    power: 0
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {

    //ebugger;

    console.log(this.character);
    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character);

    /*this.character.name = '';
    this.character.power = 0;*/
    this.character = {name: '', power: 0};

  }

}
