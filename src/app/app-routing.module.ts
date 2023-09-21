import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthenticationGuard } from './Security/auth.guard';
import { LoginComponent } from './login/login.component';
import { VentaComponent } from './venta/venta.component';
import { BorrarComponent } from './borrar/borrar.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent,canActivate: [AuthenticationGuard]},
  { path: 'cliente', component:ClienteComponent,canActivate: [AuthenticationGuard]},
  { path: 'venta', component: VentaComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'borrar', component: BorrarComponent},
  { path: '**',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
