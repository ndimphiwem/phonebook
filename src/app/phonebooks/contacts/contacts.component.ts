import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  phonebookId: any;
  contacts: any;
  filteredContacts: any;
  contactForm: any;
  loading = false;

  constructor(readonly route: ActivatedRoute, readonly phonebook: PhonebookService) {
    this.route.url.subscribe(() => {
    this.phonebookId = this.route.snapshot.paramMap.get('phonebookId');
    if (this.phonebookId) {
      this.getContacts(this.phonebookId);
      this.contactForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required)
      });
    }
  });}

  ngOnInit(): void {
  }

  addContact(contact: any) {
    if (contact?.valid) {
      this.loading = true;
      this.phonebook.addContact({ ...contact?.value }, this.phonebookId).pipe(
        finalize(() => {
          this.loading = false;
          this.contactForm.reset();
          this.getContacts(this.phonebookId);
        })
      ).subscribe();
    }
  }

  getContacts(phonebookId: any) {
    this.phonebook.getContacts(phonebookId).pipe(
      tap((contacts: any) => {
        this.contacts = contacts;
        this.filteredContacts = contacts;
      })
    ).subscribe();
  }

  filterContacts(searchString: string) {
    const searchResults = this.contacts.filter((contact: any) => {
      return contact?.name.toLowerCase().includes(searchString.toLowerCase())
            || contact?.email?.toLowerCase().includes(searchString.toLowerCase())
            || contact?.phone?.toLowerCase().includes(searchString.toLowerCase());
    });
    return searchResults;
  }

}
