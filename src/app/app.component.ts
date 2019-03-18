import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() bgBanner : string;
  route : string;

  constructor(location: Location, router: Router) {
    this.bgBanner = 'x';

    router.events.subscribe(val => {
      this.route = location.path();
    });
  }

  ngOnInit() {}
}
