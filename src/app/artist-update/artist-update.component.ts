import { Component, OnInit } from '@angular/core';
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-artist-update',
  templateUrl: './artist-update.component.html',
  styleUrls: ['../concert-update/concert-update.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
  input.ng-valid{border-left: 5px solid green;}`]
})
export class ArtistUpdateComponent implements OnInit {
  artist?:Artist;

  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getArtist()
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
  onSubmit(value: any): void{
    console.log(value);
    value.id = this.route.snapshot.paramMap.get('id');
    this.artistService.updateArtist(value)
      .subscribe();
    this.goBack();
  }


}
