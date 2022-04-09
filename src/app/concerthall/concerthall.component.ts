import { Component, OnInit } from '@angular/core';
import {Concerthall} from "../concerthall";
import {ConcerthallService} from "../concerthall.service";

@Component({
  selector: 'app-concerthall',
  templateUrl: './concerthall.component.html',
  styleUrls: ['../concert/concert.component.css']
})
export class ConcerthallComponent implements OnInit {

  concerthalls : Concerthall[] = [];


  constructor(private concerthallService: ConcerthallService) { }

  ngOnInit(): void {
    this.getConcertHalls();
  }
  getConcertHalls() : void {
    this.concerthallService.getConcertHalls()
      .subscribe(x=>{
        console.log(x);
        this.concerthalls = x;
      })
  }

}
