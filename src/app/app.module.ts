import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bug-tracker/services/bug-operations.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugOperationsService],
  bootstrap: [BugTrackerComponent]
})
export class AppModule { }
