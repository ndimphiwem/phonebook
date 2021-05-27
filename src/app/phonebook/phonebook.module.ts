import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebookComponent } from './phonebook.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: PhonebookComponent
  }
];

@NgModule({
  declarations: [
    PhonebookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhonebookModule { }
