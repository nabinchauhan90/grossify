import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HowItWorksComponent,HomeComponent, FaqComponent, AboutUsComponent, FeaturesComponent, DownloadComponent, ContactUsComponent, PrivacyPolicyComponent, TermsOfUseComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatExpansionModule,
    // BrowserAnimationsModule
  ]
})
export class PagesModule { }
