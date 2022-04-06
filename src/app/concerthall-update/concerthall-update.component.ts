import { Component, OnInit } from '@angular/core';
import {Concerthall} from "../concerthall";
import {ConcerthallService} from "../concerthall.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concerthall-update',
  templateUrl: './concerthall-update.component.html',
  styleUrls: ['./concerthall-update.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcerthallUpdateComponent implements OnInit {

  concerthall?: Concerthall;
  constructor(private concerthallService: ConcerthallService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getConcerthall();
  }
  getConcerthall(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.concerthallService.getConcertHall(id).subscribe(
      x=>{
        console.log(x);
        this.concerthall = x;
      }
    )
  };

  goBack() : void {
    this.location.back();
  }

  onSubmit(value: any): void {
    console.log(value);
    value.id = this.route.snapshot.paramMap.get('id');
    this.concerthallService.updateConcerthall(value)
      .subscribe();
    this.goBack();
  }

}
