import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'phonebooks', loadChildren: () => import('./phonebooks/phonebooks.module').then((m) => m.PhonebooksModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
