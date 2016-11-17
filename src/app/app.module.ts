import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AboutComponent } from './about/about.component';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { SponsorComponent } from './sponsor/sponsor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpeakerCardComponent,
    SpeakersComponent,
    AboutComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
