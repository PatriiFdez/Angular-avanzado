import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from '../animation';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'tienda',
  templateUrl : './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '3px solid #ccc',
        background: '#6d1a1b',
        color: 'white'
      })),
      state('active', style({
        border: '3px solid darkgreen',
        background: '#53896a',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    fadeIn
  ]
})

export class TiendaComponent implements OnInit {

  public titulo;
  public nombreDelParque: string;
  public miParque;
  public status;

  constructor() {
    this.titulo = 'Bienvenido a la tienda';
    this.status = 'inactive';
  }

  cambiarEstado(status){
    if(status == 'inactive') {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }
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
