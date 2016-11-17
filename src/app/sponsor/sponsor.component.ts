import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  template: `
  <div class="row">
    <div class="col s12">
      <h2 class="center-align">Sponsor Ng-Cruise</h2>
    </div>
  </div>
  <div class="row">
    <form #myForm="ngForm" (ngSubmit) = "submitForm(myForm)" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input [(ngModel)] = "submissions.firstName" name="first_name" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input [(ngModel)] = "submissions.lastName" name="last_name" id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input [(ngModel)] = "submissions.email" name="email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light light-blue" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
  <div *ngIf="results" class="row">
    <div class="col s12">
      <h4>Hi {{results.first_name}}, thanks for wanting to sponsor ng-cruise!</h4>
      <h4>To confirm, your first name is "{{results.first_name}}", your last name is "{{results.last_name}}", and your email is "{{results.email}}"</h4>
    </div>
  </div>

  `,
  styles: []
})
export class SponsorComponent implements OnInit {

  submitForm(myForm:NgForm) {
    console.log(myForm);
    this.results = myForm.value;
  }

  submissions: Submissions = { firstName: '', lastName: '', email: '' };

  constructor() { }

  ngOnInit() {
  }

}
