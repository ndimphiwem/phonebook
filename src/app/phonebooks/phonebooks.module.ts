import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebooksComponent } from './phonebooks.scomponent';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { MdbDropdownModule } from 'mdb-angular-ui-kit';
import { ManagePhonebooksComponent } from './manage-phonebooks/manage-phonebooks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { SharedModule } from '../shared/shared.module';


export const routes: Routes = [
  {
    path: '',
    component: PhonebooksComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ManagePhonebooksComponent
      },
      {
        path: ':phonebookId/contacts',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PhonebooksComponent,
    ManagePhonebooksComponent,
    PhonebookComponent,
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MdbDropdownModule,
    SharedModule
  ]
})
export class PhonebooksModule { }
