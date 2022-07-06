import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor() { }

  buscar() {
    console.log(this.termino);
    
  }

  termino: string = 'Hola mundo';

}
