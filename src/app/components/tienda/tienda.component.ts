import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'tienda',
  templateUrl : './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {

  public titulo;
  public nombreDelParque: string;
  public miParque;

  constructor() {
    this.titulo = 'Bienvenido a la tienda';
  }

  ngOnInit() {
    $('#botonjq').click(function() {
      console.log('click desde jquery');
      $('#textojq').slideToggle();
    });

    // $('#caja').ellipsis();
    var maxCar = 40;
    var string = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
    var stringCaja = string.length > maxCar ? string.substring(0,maxCar).concat("...") : string;

    $("#caja").text(stringCaja);
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque = event;
  }
}