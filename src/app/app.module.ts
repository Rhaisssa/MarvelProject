import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatorsComponent } from './creators/creators.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
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
