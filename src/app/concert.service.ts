import { Injectable } from '@angular/core';
import {Concert} from "./concerts";

import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";





@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  constructor(private httpClient: HttpClient) { }



  getConcerts(): Observable<Concert[]> {
    const concerts = this.httpClient.get<Concert[]>('http://localhost:8082/concert/getall');
    return concerts;
  }

}
