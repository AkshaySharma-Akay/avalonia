import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './site/resume/resume.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './site/home/home.component';
import { ContactmeComponent } from './site/contactme/contactme.component';
import { SitelayoutComponent } from './site/sitelayout/sitelayout.component';
import { DashboardlayoutComponent } from './dashboard/dashboardlayout/dashboardlayout.component';
import { DashboardhomeComponent } from './dashboard/dashboardhome/dashboardhome.component';

const routes: Routes = [
  //site routes
  {
    path: '', component: SitelayoutComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'resume', component: ResumeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactmeComponent },
    ]
  },
  //dashboard routes
  {
    path: 'dashboard', component: DashboardlayoutComponent,
    children: [
      {path: '', component:DashboardhomeComponent,pathMatch: 'full'},
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
