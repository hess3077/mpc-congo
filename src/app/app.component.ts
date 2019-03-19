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
  pages : string[];
  pageAuthorizedBanner : boolean;
  route : string;

  constructor(location: Location, router: Router) {

    router.events.subscribe(val => {
      this.route = location.path();
      this.pageAuthorizedBanner = this.getPagesAuthorizedBanner(this.route);
    });
  }

  getPagesAuthorizedBanner(route : string) {
    this.pages = ['/join_us', '/contact_us', '/rehab', '/who_are_us'];

    return this.pages.includes(route);
  }

  getBanner(page : string) {
    switch(page) { 
      case '/join_us': { 
        this.bgBanner = 'integration/5-Adherer/engagement.jpg'; 
        break; 
      }
      case '/rehab': {
        this.bgBanner = 'integration/4-Desintox/mensonge.jpg';
        break;
      }
      case '/who_are_us': {
        this.bgBanner = 'integration/6-Qui-sommes-nous/meeting-jeunesse.jpg';
        break;
      }
      case '/contact_us': { 
        this.bgBanner = 'integration/7-Nous-ecrire/contact.jpg';
        break; 
      } 
    }

    return this.bgBanner;
  }

  ngOnInit() {}
}
