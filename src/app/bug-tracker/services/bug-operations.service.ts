import { Injectable } from '@angular/core';
import { BugModel } from '../bug.model';
import { DatePipe } from '@angular/common';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {

  constructor() { }

  createNew(bugId: string, bugName: string):BugModel{
    let currentDate=Date.now();
    //let datePipe = new DatePipe(currentDate);
    
    //currentDate = datePipe.transform(currentDate,'dd/MM/yyyy');
    let bug:BugModel = new BugModel(bugId, bugName, currentDate);
    window.localStorage.setItem(bugId,JSON.stringify(bug));
    return bug;
  }

  toggle(bugToToggle: BugModel): BugModel{
    let newBug: BugModel = {...bugToToggle, isClosed : !bugToToggle.isClosed};
    return newBug;
  }
}
