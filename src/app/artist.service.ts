import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "./artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    const artists = this.httpClient.get<Artist[]>('http://localhost:8082/artist/getall');
    return artists;
  }

  getArtist(id: Number): Observable<Artist> {
    const artist = this.httpClient.get<Artist>('http://localhost:8082/artist/getbyid/'+id.toString());
    return artist;
  }
  addArtist(artist: Artist): Observable<Artist>{
    console.log(JSON.stringify(artist));
    const artistPayload = {} as Artist;
    artistPayload.bandName = artist.bandName;
    artistPayload.description = artist.description;

    return this.httpClient.post<Artist>('http://localhost:8082/artist/add', artistPayload, this.httpOptions)
      .pipe();

  }
  updateArtist(artist: Artist): Observable<Artist>{
    console.log(JSON.stringify(artist));
    const artistPayload = {} as Artist;
    artistPayload.bandName = artist.bandName;
    artistPayload.description = artist.description;

    return this.httpClient.put<Artist>('http://localhost:8082/artist/update' + '/' + artist.id, artistPayload, this.httpOptions)
      .pipe();

  }
  getArtistByBandName(bandName: String) : Observable<Artist> {
    return this.httpClient.get<Artist> ('http://localhost:8082/artist/getbyname/' + bandName)
      .pipe();
  }
  deleteArtistById(id: Number):Observable<Artist>{
    return this.httpClient.delete<Artist>('http://localhost:8082/artist/delete/' + id)
      .pipe();
  }
}
