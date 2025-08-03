import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projetoFinanceiro',
    loadComponent: () => loadRemoteModule('mfe1', './Component')
      .then((m) => m.InicioComponent)
  }

];
