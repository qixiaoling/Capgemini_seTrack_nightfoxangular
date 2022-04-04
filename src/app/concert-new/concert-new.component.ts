import { Component, OnInit } from '@angular/core';
import { ArtistService} from "../artist.service";
import {Artist} from "../artist";
import {ConcertHallService} from "../concert-hall.service";
import {Concerthall} from "../concerthall";
import {ConcertService} from "../concert.service";
import {Concert} from "../concerts";
import {ConcertObj} from "../concertObj";
import {Observable} from "rxjs";

@Component({
  selector: 'app-concert-new',
  templateUrl: './concert-new.component.html',
  styleUrls: ['./concert-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcertNewComponent implements OnInit {
  artists: Artist[] = [];
  concertHalls: Concerthall[] = [];
  concerts: Concert[] = [];
  // concertObj: ConcertObj = {
  //   price: 0,
  //   description: "",
  //   time: Date.prototype
  // };
  concert:Concert = {} as Concert;
  artist : Artist = {} as Artist;
  concertHall: Concerthall = {} as Concerthall;


  constructor(private artistService : ArtistService,
              private concertHallService: ConcertHallService,
              private concertService: ConcertService) { }

  ngOnInit(): void {
    this.getArtists();
    this.getConcertHalls();
  }

  getArtists():void{
    this.artistService.getArtists()
      .subscribe(x => {
        console.log(x);
        this.artists = x;
      })
  }
  getArtist(id:Number){
    this.artistService.getArtist(id).subscribe(
      x=>{
        console.log(x);
        this.concert.artist = x;
        console.log("I am the artist: "+ JSON.stringify(this.concert.artist) );
      }
    )
  }
  getConcertHall(id:Number){
    this.concertHallService.getConcertHall(id).subscribe(
      x=>{
        console.log(x);
        this.concert.concertHall = x;
      }
    )
  }
  getConcertHalls():void{
    this.concertHallService.getConcertHalls()
      .subscribe(x=>{
        console.log(x);
        this.concertHalls = x;
      })
  }


  onSubmit(value: any): void{
    console.log(value);
    if(value){
      this.concert.description = value.description;
      this.concert.time = value.time;
      this.concert.price = (Number)(value.price);
      this.getArtist((Number)(value.artist));
      // this.artist = this.getArtist((Number)(value.artist));
      this.getConcertHall((Number)(value.concertHall));
      console.log(this.concert);
      console.log(this.concert.artist);
    }

    this.concertService.addConcert(this.concert)
      .subscribe();





  }


}
