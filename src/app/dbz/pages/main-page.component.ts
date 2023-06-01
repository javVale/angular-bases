import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public character: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name:'Vegueta',
    power: 9000
  }];

  //metodo q recibe un character de tipo character
  onNewCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);

    this.character.push(character);
  }

  //metodo para borrar el character por medio del indice
  onDeleteCharacter(index: number){
    // con splice le decimos que borre el index pero 1 solo elmento
    this.character.splice(index, 1);
  }

 }
