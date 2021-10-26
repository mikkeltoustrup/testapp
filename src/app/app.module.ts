import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KirbyModule } from '@kirbydesign/designsystem';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KirbyModule
  ],
  entryComponents: [TesterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
