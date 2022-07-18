import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatorsComponent } from './creators/creators.component';
import { StoriesComponent } from './stories/stories.component';

import { MarvelAPIService } from './Service/marvel-api.service';
@NgModule({
  declarations: [
    AppComponent,
    AllCharactersComponent,
    ComicsComponent,
    SeriesComponent,
    CreatorsComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
