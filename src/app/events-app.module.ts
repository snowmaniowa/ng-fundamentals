import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';


@NgModule({
  imports: [
    // you can import other modules here
    BrowserModule
  ],
  declarations: [
    // you can add Component, Pipe, Directive
    EventsAppComponent
  ],
  providers: [
    // you can add services here
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
