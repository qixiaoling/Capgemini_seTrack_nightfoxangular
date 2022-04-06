import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist?:Artist;

  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getArtist();
  }
  getArtist(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artistService.getArtist(id). subscribe(
      x => {
        console.log(x);
        this.artist = x;
      });
  }
  goBack(): void{
    this.location.back();
  }

}
