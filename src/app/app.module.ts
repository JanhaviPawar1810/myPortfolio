import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    AcademicProjectsComponent,
    OtherProjectsComponent,
    SplashScreenComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
