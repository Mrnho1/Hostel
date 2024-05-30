import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'contato',component: ContatoComponent},
  {path:'quem-somos', component: QuemSomosComponent},
  {path: 'details/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
