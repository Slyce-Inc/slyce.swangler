import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIndex'
})
export class GetIndexPipe implements PipeTransform {

  /**
   * Takes an array and returns the index of the array if it exists,
   * otherwise return an empty array
   * If the index field is not provided, return the original array
   * @param {Array} array
   * @param index
   * @returns {Array} with single entry of the index
   */
  transform(array: Array<any>, index?: number): Array {
    console.log(index);
    if (index == null || index === undefined) {
      return(array);
    }
    if (index >= 0 && index < array.length) {
      return([array[index]]);
    } else {
      return [];
    }
  }

}
