import { Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'hp', redirectTo: 'results' }, { path: 'st', redirectTo: 'results' }, { path: 'pj', redirectTo: 'results' }],
  },
  { path: 'results', component: ResultsComponent },



];
