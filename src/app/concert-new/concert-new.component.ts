import { Component, OnInit } from '@angular/core';
import { ArtistService} from "../artist.service";
import {Artist} from "../artist";
import {ConcertHallService} from "../concert-hall.service";
import {Concerthall} from "../concerthall";

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
  constructor(private artistService : ArtistService,
              private concertHallService: ConcertHallService) { }

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
  getConcertHalls():void{
    this.concertHallService.getConcertHalls()
      .subscribe(x=>{
        console.log(x);
        this.concertHalls = x;
      })
  }


  ArtistId = "2";
  ConcertHallId="3";
  onSubmit(value:any){
    console.log(value)
  }


}
