import { Component, OnInit } from '@angular/core';
import {Review} from "../review";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ReviewService} from "../review.service";

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ReviewUpdateComponent implements OnInit {

  review?: Review;
  artist?: Artist;
  constructor(private reviewService: ReviewService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getArtistByReviewId();

  }

  getArtistByReviewId(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getReviewById(id).subscribe(
      x => {
        this.review = x;
        this.reviewService.getArtistName(this.review.artistId).subscribe(
          x=>{
            this.artist = x;
          }
        )
      }
    )


  }
  onSubmit(value: any): void{
    return;
  }
  goBack(): void{
    this.location.back();
  }






}
