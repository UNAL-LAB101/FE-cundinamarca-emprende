import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { FormContainerComponent } from './views/form-container/form-container.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardSelectorComponent } from './views/dashboard-selector/dashboard-selector.component';
import { LayoutComponent } from './views/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: LayoutComponent,
    children: [
  { path: 'form', component: FormContainerComponent },
  { path: 'graficos', component: FormularioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardSelector', component: DashboardSelectorComponent },
    ]
    },
 
];