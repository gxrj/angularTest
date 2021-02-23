import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ListaOcorrenciasComponent } from './lista-ocorrencias/lista-ocorrencias.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {
    path:'main',
    component: MainComponent,
    children:[
      {path:'home', component: HomeComponent},
      {path:'ocorrencias', component: ListaOcorrenciasComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)] ,
  exports:[RouterModule]
})
export class AppRoutingModule { }
