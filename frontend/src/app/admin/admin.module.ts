;
import { PlatformOrgComponent } from './pages/platform-org/platform-org.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { UsersComponent } from './pages/users/users.component';
import { SupportComponent } from './pages/support/support.component';
import { PipePipe } from './pipes/pipe.pipe';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from "./pages/history/history.component";
import { ResourcesComponent } from './pages/resources/resources.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    PagesComponent,
    PlatformsComponent,
    UsersComponent,
    SupportComponent,
    PipePipe,
    HomeComponent,
    HistoryComponent,
    ResourcesComponent,
    ParametersComponent,
    PlatformOrgComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
