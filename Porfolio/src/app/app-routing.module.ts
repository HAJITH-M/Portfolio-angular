import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'skills', component: SkillsComponent},
  { path:'portfolio', component: PortfolioComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
