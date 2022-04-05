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
import { ConcertNewComponent } from './concert-new/concert-new.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import { ConcertUpdateComponent } from './concert-update/concert-update.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistNewComponent } from './artist-new/artist-new.component';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ConcerthallComponent } from './concerthall/concerthall.component';
import { ConcerthallDetailComponent } from './concerthall-detail/concerthall-detail.component';
import { ConcerthallUpdateComponent } from './concerthall-update/concerthall-update.component';
import { ConcerthallNewComponent } from './concerthall-new/concerthall-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConcertComponent,
    SearchbarComponent,
    HomeComponent,
    ConcertDetailComponent,
    ConcertNewComponent,
    ConcertUpdateComponent,
    ArtistComponent,
    ArtistNewComponent,
    ArtistUpdateComponent,
    ArtistDetailComponent,
    ConcerthallComponent,
    ConcerthallDetailComponent,
    ConcerthallUpdateComponent,
    ConcerthallNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
