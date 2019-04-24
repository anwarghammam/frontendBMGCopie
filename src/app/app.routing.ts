import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { EventsComponent } from './examples/events/events/events.component';
import { EventDetailsComponent } from './examples/events/event-details/event-details.component'
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { AddeventComponent } from './addevent/addevent.component';
import { CollocationHomePageComponent } from './examples/collocations/collocation-home-page/collocation-home-page.component';
import { MapComponent } from './map/map.component';
import { SocialProfileComponent } from './examples/collocations/social-profile/social-profile.component';

const routes: Routes =[
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'icons',          component: NucleoiconsComponent },
    { path: 'landing',     component: LandingComponent },
    { path: 'login',       component: UserloginComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'events',     component: EventsComponent },
    { path: 'participer',     component: EventDetailsComponent },
    { path: 'register',     component: RegisterComponent },
    {path:'addevent',   component:AddeventComponent},
    {path:'collocation',   component:CollocationHomePageComponent},
    {path:'map',   component:MapComponent},
   
  

];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
