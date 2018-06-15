import { Component, OnInit } from '@angular/core';
import { BugModel } from './bug.model';
import { BugOperationsService } from './services/bug-operations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  
  bugs: BugModel[] = [];
  bugServices: BugOperationsService = null;
  closedBugCount: number = 0;
  constructor(_bugOperationServices: BugOperationsService) {
    this.bugServices = _bugOperationServices;
   }


  ngOnInit() {
  }

  onClickAddNew(bugName: string){
    
    let bug:BugModel = this.bugServices.createNew(bugName);
    this.bugs.push(bug)
  }

  onClickBugName(bug: BugModel){
    bug.isClosed = !bug.isClosed;
    
  }

  onClickRemoveClosed(){
    this.bugs = this.bugs.filter(bug=>!bug.isClosed);
   
  }

  getClosedBugCount(): number{
    return this.bugs.reduce((prevResult, bug)=> bug.isClosed ? ++prevResult:prevResult, 0);
  }

}
