import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';

export const routesApp: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'subtract', component: AddComponent},
  {path: '**', redirectTo: 'add'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
