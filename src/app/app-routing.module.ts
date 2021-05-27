import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'phonebook', loadChildren: () => import('./phonebook/phonebook.module').then((m) => m.PhonebookModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
