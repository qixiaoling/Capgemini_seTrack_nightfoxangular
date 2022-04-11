import { Component, OnInit } from '@angular/core';
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['../concert/concert.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void{
    this.artistService.getArtists()
      .subscribe(x=>{
        console.log(x);
        this.artists = x;
      })
  }

}
