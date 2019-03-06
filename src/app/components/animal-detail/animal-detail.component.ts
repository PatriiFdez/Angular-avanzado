import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL } from '../../services/global';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})

export class AnimalDetailComponent implements OnInit, DoCheck {
  public animal: Animal;
  public url: string;
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService
  ){
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log("animal-detail component cargado! ");
    this.getAnimal();
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if(!response.animal) {
            this._router.navigate(['/home']);
          } else {
            this.animal = response.animal;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home']);
        }
      )
    })
  }
}
