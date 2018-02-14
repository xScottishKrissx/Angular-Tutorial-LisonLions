import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LionsComponent } from './lions/lions.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LionDetailComponent } from './lion-detail/lion-detail.component';

//Routing - Navigating between pages
const routes: Routes =[
  //Home Page
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},

  {path: 'lions', component: LionsComponent},
  {path: 'dashboard', component: DashboardComponent},

  //The colon (:) in the path indicates that :id is a placeholder for a specific lion id.
  {path: 'detail/:id', component: LionDetailComponent }
];
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]


})
export class AppRoutingModule { }
