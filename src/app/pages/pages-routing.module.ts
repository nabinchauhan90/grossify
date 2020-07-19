import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { DownloadComponent } from './download/download.component';
import { FeaturesComponent } from './features/features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
    {path:'how-it-works',component:HowItWorksComponent},
    {path:'features',component:FeaturesComponent},
    {path:'download',component:DownloadComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'faq',component:FaqComponent},
    {path:'home',redirectTo:''},
    {path:'',component:HomeComponent ,pathMatch:'full'}

    // {path:'home' , component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
