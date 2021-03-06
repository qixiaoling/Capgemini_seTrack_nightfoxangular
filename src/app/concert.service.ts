import { Injectable } from '@angular/core';
import {Concert} from "./concerts";

import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";





@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
  }

  getConcert(id: Number): Observable<Concert> {
    const concert = this.httpClient.get<Concert>('http://localhost:8082/concert/getbyconcertid/' + id.toString());
    return concert;
  }

  getConcerts(): Observable<Concert[]> {
    const concerts = this.httpClient.get<Concert[]>('http://localhost:8082/concert/getall');
    return concerts;
  }

  addConcert(concert: Concert): Observable<Concert> {
    console.log(JSON.stringify(concert));
    return this.httpClient.post<Concert>('http://localhost:8082/concert/addconcert', concert, this.httpOptions)
      .pipe(
        // catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  updateConcert(concert: Concert): Observable<Concert> {
    console.log(JSON.stringify(concert));
    const concertPayload = {} as Concert;
    concertPayload.description = concert.description;
    concertPayload.time = concert.time;
    concertPayload.price = concert.price;


    return this.httpClient.put<Concert>('http://localhost:8082/concert/updateConcert' + '/' + concert.id, concertPayload, this.httpOptions)
      .pipe()

  }

  deleteConcert(concert: Concert): Observable<Concert> {
    return this.httpClient.delete<Concert>('http://localhost:8082/concert/delete/' + concert.artist.id + '/' + concert.concertHall.id)
      .pipe();
  }
}
