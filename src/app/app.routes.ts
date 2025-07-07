import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent, pathMatch: 'full' },        // <-- '/'
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },];
