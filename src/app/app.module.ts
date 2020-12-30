import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { CalendarOfEventsComponent } from './components/calendar-of-events/calendar-of-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeBackComponent } from './welcome-back/welcome-back.component';
import { NavComponent } from './components/nav/nav.component';
import { ComebackSoonComponent } from './comeback-soon/comeback-soon.component';
import { NmFriendsComponent } from './nm-friends/nm-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    CalendarOfEventsComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    WelcomeBackComponent,
    NavComponent,
    ComebackSoonComponent,
    NmFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
