import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SponsorComponent } from './sponsor/sponsor.component';

const appRoutes: Routes = [
 { path: '', component: AboutComponent },
 { path: 'about', component: AboutComponent },
 { path: 'speakers', component: SpeakersComponent },
 { path: 'sponsor', component: SponsorComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
