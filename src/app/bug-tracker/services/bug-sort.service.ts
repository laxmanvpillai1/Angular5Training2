import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugSortService {

  bugSortAttribute: string ='name';
  bugSortDirection: number = 1;

  constructor() { }
}
