import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links? : boolean = false;
  icon? : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeLinksClasses() {
    let className: string = "navLinks";
    if(this.links){
      className += " active";
    }
    return className;
  }
  closeMobileMenu() {
    this.links = false;
  }

  changeIconClasses() {
    let className: String = "iconLinks";
    if(this.icon) {
      className += " iconActive";
    }
    return className;
  }
  toggleLinks() {
    this.links = !(this.links);
    console.log("toggleLinks"+ this.links)
  }
  toggleIcon() {
    this.icon = !(this.icon);
    console.log("toggleIcon"+ this.icon)
  }


}
