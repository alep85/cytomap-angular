import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapboxGraphComponent } from './components/mapbox-graph/mapbox-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
