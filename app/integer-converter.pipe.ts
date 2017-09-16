import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integerConverter'
})
export class IntegerConverterPipe implements PipeTransform {
  transform(romanVal: string): string {
  var intVal = 0;
  var intArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i < intArray.length; i++) {
    while (romanVal.indexOf(romanArray[i]) === 0) {
      intVal += intArray[i];
      romanVal = romanVal.replace(romanArray[i],'');;
    }
  
  }
    return intVal.toString();
}
}