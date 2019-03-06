import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any, term: any):any { // Le paso dos datos de tipo any, y me devuelve un dato de tipo any

    function removeAccents(value) {
        return value
            .replace(/á/g, 'a')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ú/g, 'u');
    }

    if(term === undefined) {
      return items;
    }

    return items.filter(function(item) {
      return removeAccents(item.name).toLowerCase().includes(term.toLowerCase());
    })
  }

}
