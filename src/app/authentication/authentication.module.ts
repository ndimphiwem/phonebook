import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingGuard } from '../shared/landing.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    canActivate: [LandingGuard]
  }
];

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
