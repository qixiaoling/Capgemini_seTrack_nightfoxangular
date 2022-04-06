import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "./artist";
import {Review} from "./review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getReviewsByArtistId(id: Number): Observable<Review[]> {
    const reviews = this.httpClient.get<Review[]>('http://localhost:8083/review/getbyArtistId/' + id.toString());
    return reviews;
  }
  // getReview(id: Number): Observable<Review> {
  //   const review = this.httpClient.get<Review>('http://localhost:8083/review/getbyArtistId/'+id.toString());
  //   return review;
  // }
}
