import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {

  // Recibe los atributos desde el componente padre
  @Input() persona!: Persona;  
  @Input() indice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
