import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { IntroComponent } from './components/intro/intro.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ContactMeComponent,
    FaqComponent,
    FooterComponent,
    HireMeComponent,
    PortfolioComponent,
    ResumeComponent,
    ServicesComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: true,
        indexIndicatorSep: '-'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
