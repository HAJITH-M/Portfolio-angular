import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { Project1Component } from './project1/project1.component';
import { HTMLProjectsComponent } from './html-projects/html-projects.component';
import { FIGMAProjectsComponent } from './figma-projects/figma-projects.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'skills', component: SkillsComponent},
  { path:'portfolio', component: PortfolioComponent},
  { path:'project1', component: Project1Component},
  { path:'HTML-projects', component: HTMLProjectsComponent},
  { path:'FIGMA-projects', component: FIGMAProjectsComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
