import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl : './parques.component.html'
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor(){
    this.nombre = "Parque natural para caballos";
    this.metros = 450;
    this.vegetacion ='Alta';
    this.abierto = false;
  }

  // Se carga cada vez que se realiza un cambio en una propiedad
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // Se lanza una sola vez cuando cargamos un componente (Cada vez que se recarga la pantalla)
  ngOnInit(){
    console.log("Método onInit lanzado")
  }

  ngDoCheck() {
    console.log("El DoCheck se ha ejecutado");
  }

  //Se ejecutará justo antes de que angular elimine un componente o destruya la directiva de un componente
  ngOnDestroy() {
    console.log("Se va a eliminar el componente");
  }

  emitirEvento() {
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }
}
