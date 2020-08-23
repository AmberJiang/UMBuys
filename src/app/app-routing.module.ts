  /**
   * Date: 8/22/2020
   * Description: Angular Routing config
   * Author: Auto Generated
  */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    // TODO: when path is '' need to redirectTo to welcome page
    // Yiwei Yao
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'error', component: ErrorComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
