import { Component, OnInit } from '@angular/core';
import { ArtistService} from "../artist.service";
import {Artist} from "../artist";

@Component({
  selector: 'app-concert-new',
  templateUrl: './concert-new.component.html',
  styleUrls: ['./concert-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcertNewComponent implements OnInit {
  artists: Artist[] = [];
  constructor(private artistService : ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists():void{
    this.artistService.getArtists()
      .subscribe(x => {
        console.log(x);
        this.artists = x;
      })
  }


  ArtistId = "2";
  ConcertHallId="3";
  onSubmit(value:any){
    console.log(value)
  }


}
