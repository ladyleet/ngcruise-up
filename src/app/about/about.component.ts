import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <img class="image-stretch" src="/assets/header.png"/>
  `,
  styles: [`
    .image-stretch {
      width:100%; height:100%;
    }
    `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
