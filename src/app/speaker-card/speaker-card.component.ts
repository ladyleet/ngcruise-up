import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  template: `
    <div class="col s12">
      <div class="card horizontal">
        <div class="card-image">
          <img src="http://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h2>Speaker Name</h2>
            <h4>Talk Title</h4>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SpeakerCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
