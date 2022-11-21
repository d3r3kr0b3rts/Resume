import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CookienoticeComponent } from './components/cookienotice/cookienotice.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { AngularDeviceInformationService } from 'angular-device-information';
import { EducationComponent } from './pages/education/education.component';
import { EmploymentComponent } from './pages/employment/employment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CookienoticeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent,
    EducationComponent,
    EmploymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AngularDeviceInformationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
