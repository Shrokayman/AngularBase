import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || filterString === '' || propName === '') { return value }
    const filteredProduct = (data: any) => data[propName].trim().toLowerCase()
    .includes(filterString.toLowerCase())
    return value.filter(filteredProduct)
  }

}
