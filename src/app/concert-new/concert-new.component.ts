import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert-new',
  templateUrl: './concert-new.component.html',
  styleUrls: ['./concert-new.component.css'],
  styles: [`input.ng-invalid{border-left: 5px solid red;}
    input.ng-valid{border-left: 5px solid green;}`]
})
export class ConcertNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log(value)
  }


}
