import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebooksComponent } from './phonebooks.scomponent';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: PhonebooksComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    PhonebooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhonebooksModule { }
