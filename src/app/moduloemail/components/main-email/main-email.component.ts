import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="card p-3">
      <h2>{{ title }}</h2>
      <hr>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div>
  `
})

export class MainEmailComponent implements OnInit {
  title = 'Módulo de email';

  ngOnInit() {
    console.log("Componente principal del módulo cargado");
  }
}
