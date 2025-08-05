import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/auth-guard/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projetoFinanceiro',
    canActivate: [authGuard],
    loadComponent: () => loadRemoteModule('mfe1', './Component')
      .then((m) => m.InicioComponent)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }

];
