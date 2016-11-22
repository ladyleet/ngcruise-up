import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  template: `
    <div *ngFor="let speaker of speakers" class="col s12">
      <div class="card horizontal">
        <div class="card-image">
          <img src="/assets/speakers/{{speaker.image}}">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h2>{{speaker.name}}</h2>
            <h4>{{speaker.topic}}</h4>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SpeakerCardComponent implements OnInit {

  speakers: Object=[] = [{
      name: "Aaron Frost",
      image: "aaron-frost.jpg",
      topic: "CaaS: Components as a Service"
    },
    {
      name: "Alyssa Nicoll",
      image: "alyssa-nicoll.jpg",
      topic: "Animations in an Angular World"
    },
    {
      name: "Ben Lesh",
      image: "ben-lesh.jpg",
      topic: "RxJS by Example"
    },
    {
      name: "Gerard Sans",
      image: "gerard-sans.jpg",
      topic: "Panel Moderator"
    },
    {
      name: "Jeff Cross",
      image: "jeff-cross.jpg",
      topic: "Keynote"
    },
    {
      name: "Joe Eames",
      image: "joe-eames.jpeg",
      topic: "Panel Moderator"
    },
    {
      name: "Mike Brocchi",
      image: "mike-brocchi.jpg",
      topic: "Angular-CLI"
    },
    {
      name: "Tracy Lee",
      image: "tracy-lee.jpg",
      topic: "Hostess"
    },
    {
      name: "Victor Savkin",
      image: "victor-savkin.jpg",
      topic: "Keynote"
    }]

  constructor() { }

  ngOnInit() {
  }

}
