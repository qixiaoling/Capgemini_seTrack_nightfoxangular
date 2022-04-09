import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../review.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Review} from "../review";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ReviewNewComponent implements OnInit {

  artist?: Artist;
  reviewPayload?: Review;

  constructor(private reviewService: ReviewService,
              private artistService: ArtistService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getArtistByArtistId();

  }

  getArtistByArtistId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artistService.getArtist(id)
      .subscribe(
        x=>{
          console.log(x);
          this.artist = x;
        }
      )
  }
  onSubmit(value: any): void{
    console.log(value);
    value.artistId = this.route.snapshot.paramMap.get('id');
    this.reviewService.addReview(value)
      .subscribe();
    this.goBack();
  }

  goBack(): void{
    this.location.back();
  }


}
