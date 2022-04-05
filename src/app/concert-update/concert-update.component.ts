import { Component, OnInit } from '@angular/core';
import {Concert} from "../concerts";
import {ConcertService} from "../concert.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concert-update',
  templateUrl: './concert-update.component.html',
  styleUrls: ['./concert-update.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcertUpdateComponent implements OnInit {

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
  goBack(): void{
    this.location.back();
  }
  onSubmit(value: any): void{
    console.log(value);
    value.id = this.route.snapshot.paramMap.get('id');
    this.concertService.updateConcert(value)
      .subscribe();
    this.goBack();
  }

}
