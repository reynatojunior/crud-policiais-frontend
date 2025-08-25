import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ListarComponent } from './components/listar/listar.component';



export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'listar', component: ListarComponent },
  //{ path: '**', redirectTo: '' }
];

