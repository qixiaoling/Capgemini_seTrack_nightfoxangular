import { Component, OnInit } from '@angular/core';
import {Concert} from "../concerts";
import {ConcertService} from "../concert.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concert-detail',
  templateUrl: './concert-detail.component.html',
  styleUrls: ['./concert-detail.component.css']
})
export class ConcertDetailComponent implements OnInit {
  concert? : Concert;
  constructor(private concertService: ConcertService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getConcert();
  }
  getConcert(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.concertService.getConcert(id).subscribe(
      x => {
        console.log(x);
        this.concert = x;
      });


  }

}
