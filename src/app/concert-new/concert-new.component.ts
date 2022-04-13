import { Component, OnInit } from '@angular/core';
import { ArtistService} from "../artist.service";
import {Artist} from "../artist";
import {ConcerthallService} from "../concerthall.service";
import {Concerthall} from "../concerthall";
import {ConcertService} from "../concert.service";
import {Concert} from "../concerts";
import {Location} from "@angular/common";


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



  constructor(private artistService : ArtistService,
              private concertHallService: ConcerthallService,
              private concertService: ConcertService,
              private location: Location) { }

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


  onSubmit(value: Concert): void{
    console.log(value);
    this.concertService.addConcert(value)
        .subscribe();
    this.goBack();

    }

  goBack(): void{
    this.location.back();
  }







}
