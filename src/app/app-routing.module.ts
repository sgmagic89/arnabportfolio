import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { GameArtComponent } from './components/game-art/game-art.component';
import { HomeComponent } from './components/home/home.component';
import { IllustrationsComponent } from './components/illustrations/illustrations.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'gameart', component: GameArtComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'miscellaneous', component: MiscellaneousComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
