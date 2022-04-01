import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert-new',
  templateUrl: './concert-new.component.html',
  styleUrls: ['./concert-new.component.css']
})
export class ConcertNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log(value)
  }


}
