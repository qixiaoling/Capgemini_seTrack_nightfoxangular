import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../artist.service";
import {Router} from "@angular/router";
import {Artist} from "../artist";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  artistId?: number;
  constructor(private artistService: ArtistService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void{
    console.log(value.bandName);
    this.artistService.getArtistByBandName(value.bandName)
      .subscribe(x=>{
        console.log(x);
        this.artistId = x.id;
        this.router.navigate([`/artist-detail/${this.artistId}`])
      });
  }

}
