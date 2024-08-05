import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrewComponent } from "./crew/crew.component";
import { DestinationComponent } from "./destination/destination.component";
import { HomeComponent } from "./home/home.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { DataService } from "./services/data.service";
import { TechnologyComponent } from "./technology/technology.component";


@NgModule({ declarations: [
        AppComponent,
        MainPageComponent,
        DestinationComponent,
        CrewComponent,
        TechnologyComponent,
        MainMenuComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [DataService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
