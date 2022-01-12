import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IllustrationsComponent } from './components/illustrations/illustrations.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HamburgerComponent } from './components/nav/hamburger/hamburger.component';
import { GameArtComponent } from './components/game-art/game-art.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { AboutComponent } from './components/about/about.component';
import { NavItemsComponent } from './components/nav/nav-items/nav-items.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { PasswordComponent } from './components/game-art/password/password.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HamburgerComponent,
    NavItemsComponent,
    FooterComponent,
    HomeComponent,
    IllustrationsComponent,
    GameArtComponent,
    AnimationsComponent,
    MiscellaneousComponent,
    AboutComponent,
    PasswordComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
