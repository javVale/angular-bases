import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {


  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegueta',
    power: 9000
  }];

  //metodo q recibe un character de tipo character
  addCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);

    //con express operator q le decimos q le vamos a pasar todas las propiedades del character adicional al id en la nueva variable
    const newCharacter: Character = {id: uuid(), ...character};


    this.character.push(newCharacter);
  }

  //metodo para borrar el character por medio del indice
  // onDeleteCharacter(index: number){
  //   // con splice le decimos que borre el index pero 1 solo elmento
  //   this.character.splice(index, 1);
  // }

  deleteCharacterById(id:string){
    this.character = this.character.filter(character => character.id !== id);
  }

}
