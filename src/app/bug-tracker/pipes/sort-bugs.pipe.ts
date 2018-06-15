import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBugs'
})
export class SortBugsPipe implements PipeTransform {

  transform(bugs: Array<any>, column: string, direction: number): Array<any> {
    console.log(bugs, column, direction);
    if(bugs && bugs.length > 0) {
      let result = bugs.sort(function(a,b){
        if(a[column]<b[column]){
          return -1 * direction;
        }
        else if(a[column]>b[column]){
          return 1* direction;
        }
        else{
          return 0;
        }
      });
      console.table(result);
      return result;
    } else {
      return bugs;
    }
  }

}
