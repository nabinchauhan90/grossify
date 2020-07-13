import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HowItWorksComponent,HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
