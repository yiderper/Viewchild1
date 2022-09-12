import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',

})
export class FormularioComponent  {

  // Pasa la información del componente hijo al camponente padre  
  @Output() personaCreada = new EventEmitter<Persona>();

  // Permite recuperar la referencia declarada de los input en el .html
  @ViewChild('nombreReferencia')   nombreInput!   : ElementRef
  @ViewChild('apellidoReferencia') apellidoInput! : ElementRef

  // No se reciben parametros 
  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value, 
      this.apellidoInput.nativeElement.value
     );

    this.personaCreada.emit(persona1);
  }
}

