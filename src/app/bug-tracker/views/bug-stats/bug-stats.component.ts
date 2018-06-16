import { Component, OnInit, Input } from '@angular/core';
import { BugModel } from '../../bug.model';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css']
})
export class BugStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('data')
    bugs: BugModel[] = [];

    getClosedBugCount(): number{
      return this.bugs.reduce((prevResult, bug)=> bug.isClosed ? ++prevResult:prevResult, 0);
    }

}
