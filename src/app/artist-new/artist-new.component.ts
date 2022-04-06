import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../artist.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-artist-new',
  templateUrl: './artist-new.component.html',
  styleUrls: ['./artist-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ArtistNewComponent implements OnInit {

  constructor(private artistService: ArtistService,
              private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value);
    this.artistService.addArtist(value)
      .subscribe();
    this.goBack();
  }
  goBack(): void{
    this.location.back();
  }

}
