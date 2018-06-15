import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bug-tracker/services/bug-operations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trim-text-pipe.pipe';
import { SortBugsPipe } from './bug-tracker/pipes/sort-bugs.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closed-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortBugsPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugOperationsService],
  bootstrap: [BugTrackerComponent]
})
export class AppModule { }
