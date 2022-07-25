import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './Events/Events.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    EventsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
 providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
