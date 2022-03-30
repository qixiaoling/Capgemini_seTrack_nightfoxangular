import { Component, OnInit } from '@angular/core';
import {Concert} from "../concerts";
import {ConcertService} from "../concert.service";

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  concerts: Concert[] = [];

  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    this.getConcerts();
  }

  getConcerts(): void{
  this.concertService.getConcerts()
    .subscribe(x =>{
      console.log(x);
      this.concerts = x;
    })

  }
}
