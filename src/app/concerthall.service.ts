import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Concerthall} from "./concerthall";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConcerthallService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getConcertHalls(): Observable<Concerthall[]> {
    const concertHalls = this.httpClient.get<Concerthall[]>('http://localhost:8082/concerthall/getall');
    return concertHalls;
  }
  getConcertHall(id:Number): Observable<Concerthall>{
    const concertHall = this.httpClient.get<Concerthall>('http://localhost:8082/concerthall/getbyid/' + id.toString());
    return concertHall;
  }
  addConcerthall(concerthall: Concerthall): Observable<Concerthall>{
    console.log(JSON.stringify(concerthall));
    return this.httpClient.post<Concerthall>('http://localhost:8082/concerthall/add', concerthall, this.httpOptions)
      .pipe();

  }

  updateConcerthall(concerthall: Concerthall) : Observable<Concerthall> {
    console.log(JSON.stringify(concerthall));
    return this.httpClient.put<Concerthall>('http://localhost:8082/concerthall/update/' + concerthall.id, concerthall, this.httpOptions)
      .pipe();
  }

}
