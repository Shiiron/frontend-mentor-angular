import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { DataService } from './services/data.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    MainMenuComponent,
    ProjectListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
