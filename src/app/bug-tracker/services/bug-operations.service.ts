import { Injectable } from '@angular/core';
import { BugModel } from '../bug.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {

  constructor() { }

  createNew(bugId: string, bugName: string):BugModel{
    let currentDate=  Date.now();
    //let datePipe = new DatePipe(currentDate);
    
    //currentDate = datePipe.transform(currentDate,'dd/MM/yyyy');
    let bug:BugModel = new BugModel(bugId, bugName, currentDate);
    return bug;
  }
}
