import { Component, OnInit } from '@angular/core';
import { BugSortService } from '../../services/bug-sort.service';

@Component({
  selector: 'app-bug-sort',
  templateUrl: './bug-sort.component.html',
  styleUrls: ['./bug-sort.component.css']
})
export class BugSortComponent implements OnInit {

  constructor(private _bugSortService: BugSortService) { }

  ngOnInit() {
  }

}
