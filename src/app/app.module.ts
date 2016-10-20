import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { SecompRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDO45zNHWqc9P0uN_mV5I7aJje1a0y4g2o",
  authDomain: "firestore-1051b.firebaseapp.com",
  databaseURL: "https://firestore-1051b.firebaseio.com",
  storageBucket: "firestore-1051b.appspot.com",
  messagingSenderId: "438081617473"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SecompRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
