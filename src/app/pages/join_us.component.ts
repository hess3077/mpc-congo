import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join_us.component.html',
  styleUrls: ['./join_us.component.scss']
})
export class JoinUsComponent implements OnInit {
  @Input() bgBanner : string;

  constructor() { 
    this.bgBanner = 'integration/5-Adherer/engagement.jpg';
  }

  ngOnInit() {
  }

}
