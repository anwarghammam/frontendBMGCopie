import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { CountToModule } from 'angular-count-to';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/examples/profile/navbar/navbar.component';
import { EventsComponent } from './examples/events/events/events.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { HttpClientModule } from '@angular/common/http';
import { EventServiceService} from './services/eventservice/event-service.service';
import { EventDetailsComponent } from './examples/events/event-details/event-details.component';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserserviceService } from './services/userservice/userservice.service';
import { AddeventComponent } from './addevent/addevent.component';
import { FooterComponent } from './footer/footer.component';
import { CollocationHomePageComponent } from '../app/examples/collocations/collocation-home-page/collocation-home-page.component';
import { PostsServiceService } from './services/postservice/posts-service.service';
import { MapComponent } from './map/map.component';
import { SocialProfileComponent } from './examples/collocations/social-profile/social-profile.component';





@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EventsComponent,
        EventDetailsComponent,
        RegisterComponent,
        UserloginComponent,
        AddeventComponent,
        FooterComponent,
        CollocationHomePageComponent,
        MapComponent,
        SocialProfileComponent
    ],
    imports: [
        BrowserAnimationsModule,
    MglTimelineModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule ,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        CountToModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
 

        
        
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
    providers: [EventServiceService,UserserviceService,PostsServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
