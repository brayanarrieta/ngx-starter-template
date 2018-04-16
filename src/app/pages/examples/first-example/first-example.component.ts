import { Component, OnInit } from '@angular/core';
import {ToasterManagerService} from './toaster-manager.service';
@Component({
  selector: 'ngx-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.scss'],
})
export class FirstExampleComponent implements OnInit {
  constructor(private toasterManagerService: ToasterManagerService) {}

  ngOnInit() {
  }
  showToast() {
    this.toasterManagerService.makeToast();
  }

}
