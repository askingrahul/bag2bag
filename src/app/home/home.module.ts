import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: HomeComponent}
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [HomeComponent]
})
export class HomeModule { 
 
}
