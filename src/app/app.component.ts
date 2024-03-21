import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ListaGordienko';

  hasError = false;
  isDisabled = true;
  students = [{nombre: 'Franco', aprobado: true}, {nombre: 'Isabel', aprobado: true}, {nombre: 'Daniel', aprobado: false}, {nombre: 'Ana', aprobado: false}, {nombre: 'Javier', aprobado: false}, {nombre: 'Melisa', aprobado: true}];
  mostrarListado = false;
  status : 'Inscripto' | 'Egresado' | 'ExAlumno' = 'Inscripto';
  myBirthday = new Date(2000,10,10);
  fechaPrueba = new Date(2024,6,30);
  mostrarAprobados = true;

  frutas: string[] = [];
  frutas2: Array<string> = [];

  alternarError(){
    this.hasError = ! this.hasError;
  }

  alternarAprobados(){
    this.mostrarAprobados = ! this.mostrarAprobados;
  }

  onSelectChange(ev : Event){
    console.log("Cambio de estado");
    const elemento = ev.target as HTMLSelectElement;
    const valor = elemento.value as
    | 'ExAlumno'
    | 'Egresado'
    | 'Inscripto';
    this.status = valor; 
  }
}
