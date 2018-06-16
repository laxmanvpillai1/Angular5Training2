import { Component, DoCheck } from '@angular/core';
import { BugModel } from './bug.model';
import { BugOperationsService } from './services/bug-operations.service';
import {HttpClient} from '@angular/common/http'
import { BugSortComponent } from './views/bug-sort/bug-sort.component';
import { BugSortService } from './services/bug-sort.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements DoCheck {

  
  bugs: BugModel[] = [];
  bugServices: BugOperationsService = null;
  bugSortAttribute: string = 'name';
  bugSortDirection: number = 1;


  constructor(_bugOperationServices: BugOperationsService,
  _bugSortService: BugSortService) {
    this.bugServices = _bugOperationServices;
   }


  ngDoCheck() {
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

  

}
