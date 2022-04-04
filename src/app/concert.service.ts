import { Injectable } from '@angular/core';
import {Concert} from "./concerts";

import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";





@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  getConcert(id: Number): Observable<Concert>{
    const concert = this.httpClient.get<Concert>( 'http://localhost:8082/concert/getbyconcertid/' + id.toString());
    return concert;
  }

  getConcerts(): Observable<Concert[]> {
    const concerts = this.httpClient.get<Concert[]>('http://localhost:8082/concert/getall');
    return concerts;
  }

  addConcert(concert: Concert): Observable<Concert> {
    console.log(concert);
    return this.httpClient.post<Concert>('http://localhost:8082/concert/addconcert/'+concert.artist + '/' + concert.concertHall, concert, this.httpOptions)
      .pipe(
        // catchError(this.handleError<Hero[]>('getHeroes', []))
      )

  }

}
