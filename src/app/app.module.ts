import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bug-tracker/services/bug-operations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trim-text-pipe.pipe';
import { SortBugsPipe } from './bug-tracker/pipes/sort-bugs.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closed-count.pipe';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';
import { BugStatsComponent } from './bug-tracker/views/bug-stats/bug-stats.component';
import { BugSortComponent } from './bug-tracker/views/bug-sort/bug-sort.component';
import { BugSortService } from './bug-tracker/services/bug-sort.service'

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortBugsPipe,
    ClosedCountPipe,
    ElapsedPipe,
    BugStatsComponent,
    BugSortComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugOperationsService,
    BugSortService],
  bootstrap: [BugTrackerComponent]
})
export class AppModule { }
