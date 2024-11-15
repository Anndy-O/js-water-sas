import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    LandingComponent,
    StartComponent,
    AboutUsComponent,
    PortfolioComponent,
    ContactUsComponent,
    ProjectsComponent
  ],
  exports: [ ]
})
export class HomeModule { }
