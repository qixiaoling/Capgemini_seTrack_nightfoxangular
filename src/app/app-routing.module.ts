import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ConcertComponent} from "./concert/concert.component";
import {ConcertDetailComponent} from "./concert-detail/concert-detail.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'concerts', component: ConcertComponent},
  { path: 'concert-detail/:id', component: ConcertDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
