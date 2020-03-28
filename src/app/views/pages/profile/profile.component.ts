import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'kt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  activePage: String;
  constructor(private router: Router) {
    this.activePage = this.router.url;
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.activePage = val.url;
      }

    });
  }

  ngOnInit() {
  }

}
