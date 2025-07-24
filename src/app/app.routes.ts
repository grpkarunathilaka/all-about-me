import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' } // Redirect to home if no matching route
];