import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AdministracionEscribaniasComponent} from './administracion-escribanias/administracion-escribanias.component'
import { DetalleEscribaniaComponent} from './detalle-escribania/detalle-escribania.component'
import { AltaEscribaniaComponent } from './alta-escribania/alta-escribania.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administracion-escribanias', component: AdministracionEscribaniasComponent },
  { path: 'detalle-escribania', component: DetalleEscribaniaComponent },
  { path: 'detalle-escribania:cuit', component: DetalleEscribaniaComponent },
  { path: 'alta-escribania', component: AltaEscribaniaComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
