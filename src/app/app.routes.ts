import { Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { HomeComponent } from './pages/home/home.component';
import { StarWarsComponent } from './pages/star-wars/star-wars.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hp', redirectTo: 'results' },
  { path: 'st', component: StarWarsComponent },
  { path: 'pj', redirectTo: 'results' },
  { path: 'results', component: ResultsComponent },
];
