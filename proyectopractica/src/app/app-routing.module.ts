import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'inicio', component : ListComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'login', component : LoginComponent},
  {path: 'Form', component : FormComponent},
  {path: 'editar', component : EditarComponent},
  {path: 'nuevo', component : NuevoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, 
NuevoComponent, EditarComponent]