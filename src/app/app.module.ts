import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    NoopAnimationsModule,
    AuthModule.forRoot({
      ...environment.authConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
