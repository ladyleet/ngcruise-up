import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <div class="nav-wrapper light-blue">
        <a href="#" class="brand-logo center"><img src="/assets/logo.png"/></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="about">About</a></li>
          <li><a routerLink="speakers">Speakers</a></li>
          <li><a routerLink="sponsor">Sponsor</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
