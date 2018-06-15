import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
