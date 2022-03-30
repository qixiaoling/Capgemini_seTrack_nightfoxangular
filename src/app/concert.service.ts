import { Injectable } from '@angular/core';
import {Concert} from "./concerts";
//THIS IS THE INTERFACE TYPE
import {CONCERTS} from "./Mock-concerts";
import {Observable, of} from "rxjs";





@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  constructor() { }

  getConcert(id: number): Observable<Concert>{
    const concert = CONCERTS.find(c => c.id == id)!;
    return of(concert);
  }

  getConcerts(): Observable<Concert[]> {
    const concerts = of(CONCERTS);
    return concerts;
  }

}
