import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './protector/auth.guard';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'comics', component: ComicsComponent},
  { path: 'creators', component: CreatorsComponent},
  { path: 'series', component: SeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
