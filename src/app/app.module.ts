import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NormalCompComponent } from './normal-comp/normal-comp.component';
import { PushCompComponent } from './push-comp/push-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalCompComponent,
    PushCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
