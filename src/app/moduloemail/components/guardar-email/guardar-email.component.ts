import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
  <h4>{{ title }}</h4>
  <div class="row">
      <input class="form-control col-5 ml-2" type="text" [(ngModel)]="emailContacto" />
      <button class="btn btn-info ml-1" (click)="guardarEmail()"> Guardar email </button>
  </div>
  `
})

export class GuardarEmailComponent {
  title = 'Guardar email';
  emailContacto: string;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}
