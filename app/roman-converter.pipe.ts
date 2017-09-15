import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanConverter'
})
export class RomanConverterPipe implements PipeTransform {
  transform(intVal: string): string {
  var romanVal = '';
  var intArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i < intArray.length; i++) {
    while (intVal >= intArray[i]) {
      romanVal += romanArray[i];
      intVal -= intArray[i];
    }
  
  }
    return romanVal;
}
}