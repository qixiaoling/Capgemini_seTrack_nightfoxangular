import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ConcertComponent} from "./concert/concert.component";
import {ConcertDetailComponent} from "./concert-detail/concert-detail.component";
import {ConcertNewComponent} from "./concert-new/concert-new.component";
import {ConcertUpdateComponent} from "./concert-update/concert-update.component";
import {ArtistComponent} from "./artist/artist.component";
import {ArtistDetailComponent} from "./artist-detail/artist-detail.component";
import {ArtistNewComponent} from "./artist-new/artist-new.component";
import {ArtistUpdateComponent} from "./artist-update/artist-update.component";
import {ConcerthallComponent} from "./concerthall/concerthall.component";
import {ConcerthallDetailComponent} from "./concerthall-detail/concerthall-detail.component";
import {ConcerthallNewComponent} from "./concerthall-new/concerthall-new.component";
import {ConcerthallUpdateComponent} from "./concerthall-update/concerthall-update.component";
import {ReviewNewComponent} from "./review-new/review-new.component";
import {ReviewUpdateComponent} from "./review-update/review-update.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'concerts', component: ConcertComponent},
  { path: 'concert-detail/:id', component: ConcertDetailComponent},
  { path: 'concert-new', component:ConcertNewComponent},
  { path: 'concert-update/:id', component:ConcertUpdateComponent},
  { path: 'artists', component: ArtistComponent},
  { path: 'artist-detail/:id', component: ArtistDetailComponent},
  { path: 'artist-new', component:ArtistNewComponent},
  { path: 'artist-update/:id', component:ArtistUpdateComponent},
  { path: 'concerthalls', component: ConcerthallComponent},
  { path: 'concerthall-detail/:id', component: ConcerthallDetailComponent},
  { path: 'concerthall-new', component:ConcerthallNewComponent},
  { path: 'concerthall-update/:id', component:ConcerthallUpdateComponent},
  { path: 'review-new', component:ReviewNewComponent},
  { path: 'review-update/:id', component:ReviewUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
