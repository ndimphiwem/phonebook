import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { finalize, first, switchMap, tap } from 'rxjs/operators';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-manage-phonebooks',
  templateUrl: './manage-phonebooks.component.html'
})
export class ManagePhonebooksComponent implements OnInit {
  user: any;
  phonebooks: any;
  phonebookForm: FormGroup;
  loading = false;

  constructor(readonly phonebook: PhonebookService, readonly auth: AuthService) {
    this.phonebookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
    this.auth.user$.pipe(
      first(),
      tap(user => this.user = user),
      switchMap(() =>  this.phonebook.getPhoneBooks().pipe(
        tap((phonebooks: any) => this.phonebooks = phonebooks.filter((book: any) => book?.userId === this.user?.sub))
      ))
    ).subscribe();
  }

  ngOnInit(): void {

  }

  addPhonebook(phonebook: any) {
    if (phonebook?.valid) {
      this.loading = true;
      this.phonebook.addPhoneBook({
        ...phonebook?.value,
        userId: this.user?.sub
      }).pipe(
        finalize(() => {
          this.loading = false;
          this.phonebookForm.reset();
          this.getPhoneBooks();
        })
      ).subscribe();
    }
  }

  getPhoneBooks() {
    this.phonebook.getPhoneBooks().pipe(
      tap((phonebooks: any) => this.phonebooks = phonebooks.filter((book: any) => book?.userId === this.user?.sub))
    ).subscribe();
  }
}
