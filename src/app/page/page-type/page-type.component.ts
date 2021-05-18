import { Component, HostListener, Input } from '@angular/core';
import { Alert } from 'src/app/base/base-alert/alert';
import { BaseAlertComponent } from 'src/app/base/base-alert/base-alert.component';

@Component({
  selector: 'app-page-type',
  templateUrl: './page-type.component.html',
  styleUrls: ['./page-type.component.scss']
})
export class PageTypeComponent {

  @Input() alert:Alert = {
    text:'Default Alert Text',
    level:BaseAlertComponent.Levels.SECONDARY,
    visible:true
  };

  @HostListener('window:keyup.escape')
  hideAlert(){
    this.alert.visible = false;
  }

  showAlert(){
    this.alert.visible = true;
  }

}
