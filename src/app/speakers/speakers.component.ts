import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  template: `
  <div class="row">
    <div class="col s12">
      <h2 class="center-align">Meet the Speakers</h2>
    </div>
  </div>
  <div class="row">
    <app-speaker-card></app-speaker-card>
  </div>

  `,
  styles: []
})
export class SpeakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
