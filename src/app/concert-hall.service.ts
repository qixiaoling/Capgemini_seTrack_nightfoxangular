import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Concerthall} from "./concerthall";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConcertHallService {

  constructor(private httpClient: HttpClient) { }

  getConcertHalls(): Observable<Concerthall[]> {
    const concertHalls = this.httpClient.get<Concerthall[]>('http://localhost:8082/concerthall/getall');
    return concertHalls;
  }
  getConcertHall(id:Number): Observable<Concerthall>{
    const concertHall = this.httpClient.get<Concerthall>('http://localhost:8082/concerthall/getbyid/' + id.toString());
    return concertHall;
  }


}
