import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebooksComponent } from './phonebooks.scomponent';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { MdbModule } from 'mdb-angular-ui-kit';


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
    RouterModule.forChild(routes),
    MdbModule
  ]
})
export class PhonebooksModule { }
