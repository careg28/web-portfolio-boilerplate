import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), pathMatch: 'full' },
      { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
      { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'login', loadComponent: () => import('./shared/components/login/login.component').then(m => m.LoginComponent) },
    ]
  },
  // Rutas admin protegidas
  {
    path: 'admin',
    canMatch: [AuthGuard],
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./admin/pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'users', loadComponent: () => import('./admin/pages/users/users.component').then(m => m.UsersComponent) },
      { path: 'projects', loadComponent: () => import('./admin/pages/projects/projects.component').then(m => m.ProjectsComponent) },
      { path: 'messages', loadComponent: () => import('./admin/pages/messages/messages.component').then(m => m.MessagesComponent) },
      { path: 'messages/:id', loadComponent: () => import('./admin/pages/messages-detail/messages-detail.component').then(m => m.MessagesDetailComponent) },
      { path: 'packages', loadComponent: () => import('./admin/pages/packages/packages-list.component').then(m => m.PackagesListComponent) },
    ]
  },
  // Redirección si no existe la ruta
  { path: '**', redirectTo: '', pathMatch: 'full' }
];