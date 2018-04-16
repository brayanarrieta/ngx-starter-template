import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { FirstExampleComponent } from './first-example/first-example.component';
import {ThemeModule} from '../../@theme/theme.module';
import {ToasterManagerService} from '../../@core/toast/toaster-manager.service';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ExamplesRoutingModule,
    ToasterModule.forRoot(),
  ],
  declarations: [ExamplesComponent, FirstExampleComponent],
  providers: [ToasterManagerService],
})
export class ExamplesModule { }
