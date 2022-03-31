import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ConcertComponent} from "./concert/concert.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ConcertDetailComponent } from './concert-detail/concert-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConcertComponent,
    SearchbarComponent,
    HomeComponent,
    ConcertDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
