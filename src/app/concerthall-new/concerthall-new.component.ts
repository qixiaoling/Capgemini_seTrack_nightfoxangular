import { Component, OnInit } from '@angular/core';
import {ConcerthallService} from "../concerthall.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-concerthall-new',
  templateUrl: './concerthall-new.component.html',
  styleUrls: ['../concert-new/concert-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcerthallNewComponent implements OnInit {

  constructor(private concerthallService: ConcerthallService,
              private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value);
    this.concerthallService.addConcerthall(value)
      .subscribe();
    this.goBack();
  }
  goBack(): void{
    this.location.back();
  }

}
