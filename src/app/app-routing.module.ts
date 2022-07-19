import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [

  { path:'', component:CharactersComponent},
  { path:'comics', component:ComicsComponent},
  { path:'creators', component:CreatorsComponent},
  { path:'series', component:SeriesComponent},
  { path:'stories', component:StoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
