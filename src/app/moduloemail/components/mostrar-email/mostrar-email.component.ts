import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
  <h4>{{ title }}</h4>
    <div *ngIf="emailContacto">
      <strong>Email de contacto: </strong> {{emailContacto}}
      <div class="col-12 mt-2 mb-2">
        <button class="btn btn-outline-primary" (click)="borrarEmail()">Eliminar email de contacto</button>
      </div>
    </div>
  `
})

export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar email';
  emailContacto: string;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
