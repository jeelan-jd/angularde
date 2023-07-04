
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { variationPlacements } from '@popperjs/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  title: string = '';
  constructor(private route: Router) {}
  setHeader() {
    let path = this.route.url.split('/')[1];

    if(path === "") {
      console.log("no path")
      this.title = decodeURIComponent("scheduler");
    }

    else {
      this.title = decodeURIComponent(path);
    }
  }
  

}
