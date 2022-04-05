import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ConcertComponent} from "./concert/concert.component";
import {ConcertDetailComponent} from "./concert-detail/concert-detail.component";
import {ConcertNewComponent} from "./concert-new/concert-new.component";
import {ConcertUpdateComponent} from "./concert-update/concert-update.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'concerts', component: ConcertComponent},
  { path: 'concert-detail/:id', component: ConcertDetailComponent},
  { path: 'concert-new', component:ConcertNewComponent},
  { path: 'concert-update/:id', component:ConcertUpdateComponent},
  { path: 'concert-delete/:id', component:ConcertNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
