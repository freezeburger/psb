import { Component, Input, OnInit } from '@angular/core';
import { Alert } from './alert';
import { AlertLevels } from './alert-levels.enum';


@Component({
  selector: 'app-base-alert',
  templateUrl: './base-alert.component.html',
  styleUrls: ['./base-alert.component.scss']
})
export class BaseAlertComponent {

  static Levels = AlertLevels;

  @Input() alert:Alert = {
      level:AlertLevels.PRIMARY,
      text:'Default Text',
      visible:true
  }

  close() {
    this.alert.visible = false;
  }

}


