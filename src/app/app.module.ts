import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForMobileAppComponent } from './for-mobile-app/for-mobile-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy } from  '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ForMobileAppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatExpansionModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
