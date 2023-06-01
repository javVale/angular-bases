import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{

    name: 'Trunks',
    power: 10
  }]

  // variable para poder enviar al componente padre donde esta el erray mediante el metodo onDeteleCharacter
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //metodo para que el boton envie el indice
  onDeleteCharacter(id?: string): void{
    //TODO: Emitir el ID del personaje
    // console.log(index);

    //si no existe el id
    if(!id)return;
    this.onDelete.emit(id);
  }

}
