import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  //cuando ponga la ruta login lo lleva a logincomponent
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'info', component: InfoComponent},
  {path:'dashboard',loadChildren:()=>import('./components/dashboard/dashboard.module').then(x =>x.DashboardModule)},
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
