import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-examples',
  template: `<toaster-container></toaster-container>
              <router-outlet></router-outlet>`,
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
