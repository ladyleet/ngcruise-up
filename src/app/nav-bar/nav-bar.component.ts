import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <div class="nav-wrapper light-blue">
        <a href="#" class="brand-logo center"><img src="/assets/logo.png"/></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
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
