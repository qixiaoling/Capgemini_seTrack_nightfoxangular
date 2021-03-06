import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {Artist} from "./artist";
import {Review} from "./review";
import {Concerthall} from "./concerthall";

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
  updateReview(review: Review): Observable<Review> {
    return this.httpClient.put<Review>('http://localhost:8083/review/update/'+ review.id, review, this.httpOptions)
    .pipe();
  }

  getArtistName(id: Number): Observable<Artist>{
    const artist = this.httpClient.get<Artist>('http://localhost:8082/artist/getbyid/' + id.toString());
    return artist;
  }
  getReviewById(id: Number): Observable<Review> {
    const review = this.httpClient.get<Review>('http://localhost:8083/review/getbyid/' + id.toString());
    return review;

  }
  addReview(review: Review): Observable<Review>{
    console.log(JSON.stringify(review));
    return this.httpClient.post<Review>('http://localhost:8083/review/add/' + review.artistId, review, this.httpOptions)
      .pipe();

  }

  deleteReviewById(id:Number): Observable<Review> {
    return this.httpClient.delete<Review>('http://localhost:8083/review/delete/' + id)
      .pipe();
  }


}
