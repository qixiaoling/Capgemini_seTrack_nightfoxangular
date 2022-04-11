import { Component, OnInit } from '@angular/core';
import {Concerthall} from "../concerthall";
import {ConcerthallService} from "../concerthall.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concerthall-detail',
  templateUrl: './concerthall-detail.component.html',
  styleUrls: ['../concert-detail/concert-detail.component.css']
})
export class ConcerthallDetailComponent implements OnInit {

  concerthall?: Concerthall;

  constructor(private concerthallService: ConcerthallService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getConcertHall();
  }
  getConcertHall() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.concerthallService.getConcertHall(id).subscribe(
      x=>{
        console.log(x);
        this.concerthall = x;
      }
    )
  }
  goBack() : void {
    this.location.back();
  }

}
