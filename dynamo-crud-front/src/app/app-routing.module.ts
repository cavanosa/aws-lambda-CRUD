import { ListComponent } from './producto/list.component';
import { UpdateComponent } from './producto/update.component';
import { CreateComponent } from './producto/create.component';
import { DetailComponent } from './producto/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
