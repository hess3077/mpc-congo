import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() pageAuthorizedBanner : boolean;
  @Input() title : Object;
  @Input() route : string;

  constructor() { }

  ngOnInit() {
  }

}
