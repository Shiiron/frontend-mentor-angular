import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { dataService } from "./services/data.service";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { CrewComponent } from "./pages/crew/crew.component";
import { DestinationComponent } from "./pages/destination/destination.component";
import { TechnologyComponent } from "./pages/technology/technology.component";


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
        AppRoutingModule], providers: [dataService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
