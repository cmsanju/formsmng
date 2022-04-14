import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:'home-page', component: HomeComponent},
  {path: 'student-list', component:StudentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
