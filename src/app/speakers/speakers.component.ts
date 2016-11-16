import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  template: `
    <div class="container">
      <div class="row">
        <div class="col s12">
            <h1>Speakers</h1>
        </div>
      </div>
      <div class="row">
        <app-speaker-card></app-speaker-card>
      </div>
    </div>
  `,
  styles: []
})
export class SpeakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
