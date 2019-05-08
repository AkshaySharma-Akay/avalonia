import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './site/resume/resume.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './site/home/home.component';
import { ContactmeComponent } from './site/contactme/contactme.component';
import { SitelayoutComponent } from './site/sitelayout/sitelayout.component';
import { DashboardlayoutComponent } from './dashboard/dashboardlayout/dashboardlayout.component';
import { DashboardhomeComponent } from './dashboard/dashboardhome/dashboardhome.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactmeComponent,
    SitelayoutComponent,
    DashboardlayoutComponent,
    DashboardhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
