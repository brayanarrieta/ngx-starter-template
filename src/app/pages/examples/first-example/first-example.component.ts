import { Component } from '@angular/core';
import {ToasterManagerService} from '../../../@core/toast/toaster-manager.service';
import {configToasterManager} from '../../../@core/toast/config';
@Component({
  selector: 'ngx-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.scss'],
})
export class FirstExampleComponent {
  config= configToasterManager;
  constructor(private toasterManagerService: ToasterManagerService) {}
  showToast() {
    this.toasterManagerService.makeToast('default', 'title', 'content');
  }
}
