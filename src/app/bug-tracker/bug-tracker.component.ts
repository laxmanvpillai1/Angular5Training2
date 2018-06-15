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
  bugSortAttribute: string = 'name';
  bugSortDirection: number = 1;


  constructor(_bugOperationServices: BugOperationsService) {
    this.bugServices = _bugOperationServices;
   }


  ngOnInit() {
    let windowStorageLength: number = window.localStorage.length;
    for(let i=0; i<windowStorageLength; i++){
      this.bugs[i] = JSON.parse(window.localStorage.getItem( window.localStorage.key(i)));
    }
  }

  onClickAddNew(bugName: string){
    
    let bugId: string = 'bug' + (window.localStorage.length +1);
    let bug:BugModel = this.bugServices.createNew(bugId, bugName);
    this.bugs = [...this.bugs, bug];
    
  }

  onClickBugName(oldBug: BugModel){
    let newBug: BugModel = this.bugServices.toggle(oldBug); 
    this.bugs = this.bugs.map(bug => bug === oldBug? newBug: bug );
    window.localStorage.setItem(oldBug.bugId,JSON.stringify(newBug));

  }

  onClickRemoveClosed(){
    let closedBugs: BugModel[] = this.bugs.filter(bug=>bug.isClosed);
    this.bugs = this.bugs.filter(bug=>!bug.isClosed);
    closedBugs.forEach(bug => {
      window.localStorage.removeItem(bug.bugId);
    });
  }

  getClosedBugCount(): number{
    return this.bugs.reduce((prevResult, bug)=> bug.isClosed ? ++prevResult:prevResult, 0);
  }

}
