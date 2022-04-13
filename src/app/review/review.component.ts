import { Component, OnInit } from '@angular/core';
import {Review} from "../review";
import {ReviewService} from "../review.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  indexArray: number = 0;
  reviews: Review[] = [];


  constructor(private reviewService: ReviewService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getReviewsByArtistId();
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  getReviewsByArtistId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.reviewService.getReviewsByArtistId(id)
      .subscribe(x=>{
        console.log(x);
        this.reviews = x;
      })
  }
  prevPerson(index: number) :Number{

    index -= 1;
    console.log(index)
    this.indexArray = this.checkNumber(index);
    return this.indexArray;

  }
  nextPerson(index: number): number {
    index += 1;
    console.log(index)
    this.indexArray = this.checkNumber(index);
    return this.indexArray;
  }
  checkNumber(num: number) : number {
    if(num > this.reviews.length-1){
      return 0;
    }
    if(num < 0) {
      return this.reviews.length-1;
    }
    return num;
  }

  deleteReview(review: Review) : void {
    this.reviews = this.reviews.filter(a => a !== review);
    this.reviewService.deleteReviewById(review.id).subscribe();
  }

}
