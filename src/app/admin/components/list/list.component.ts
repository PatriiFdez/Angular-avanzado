import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  title = 'Listado';
  // numbers = [0, 1, 2, 3, 4, 5];
  numbers = new Array(10);
}