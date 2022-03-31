import { Injectable } from '@angular/core';
import {Concert} from "./concerts";
//THIS IS THE INTERFACE TYPE
import {CONCERTS} from "./Mock-concerts";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";





@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  constructor(private httpClient: HttpClient) { }

  getConcert(id: number): Observable<Concert>{
    const concert = CONCERTS.find(c => c.id == id)!;
    return of(concert);
  }

  getConcerts(): Observable<Concert[]> {
    const concerts = this.httpClient.get<Concert[]>('http://localhost:8082/concert/getall');
    return concerts;
  }

}
