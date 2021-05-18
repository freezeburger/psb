import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PollComponent } from './poll/poll.component';
import { PollCreatorComponent } from './poll-creator/poll-creator.component';
import { PollViewerComponent } from './poll-viewer/poll-viewer.component';



@NgModule({
  declarations: [
    PollComponent,
    PollCreatorComponent,
    PollViewerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PollComponent
  ]
})
export class PollModule { }
