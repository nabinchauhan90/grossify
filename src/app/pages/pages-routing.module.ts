import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
    {path:'how-it-works',component:HowItWorksComponent},
    {path:'home',redirectTo:''},
    {path:'',component:HomeComponent ,pathMatch:'full'}
    // {path:'home' , component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
