import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './space-tourism/main-page/main-page.component';
import { DestinationComponent } from './space-tourism/destination/destination.component';
import { CrewComponent } from './space-tourism/crew/crew.component';
import { TechnologyComponent } from './space-tourism/technology/technology.component';
import { MainMenuComponent } from './space-tourism/main-menu/main-menu.component';

import { DataService } from './space-tourism/services/data.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './space-tourism/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    MainMenuComponent,
    ProjectListComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
