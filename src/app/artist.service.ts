import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "./artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    const artists = this.httpClient.get<Artist[]>('http://localhost:8082/artist/getall');
    return artists;
  }
}
