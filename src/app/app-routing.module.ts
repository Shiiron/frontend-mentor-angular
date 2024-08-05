import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryDetailComponent } from "./pages/country-detail/country-detail.component";
import { CountryHomeComponent } from "./pages/country-home/country-home.component";
import { CountryListComponent } from "./pages/country-list/country-list.component";


const routes: Routes = [
  {
    path: 'country-list',
    component: CountryHomeComponent,
    children: [
      { path: 'list', component: CountryListComponent },
      {
        path: ':countryCode',
        component: CountryDetailComponent,
      },
    ],
  },
  { path: '', redirectTo: '/country-list/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
