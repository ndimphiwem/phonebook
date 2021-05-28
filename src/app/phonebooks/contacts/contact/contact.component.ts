import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PhonebookService } from '../../phonebook.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @Input() contact: any;
  @Input() phonebookId: any;
  @Output() updated: EventEmitter<any> = new EventEmitter<any>();

  contactForm: any;
  loading = false;
  updating = false;
  constructor(readonly phoneService: PhonebookService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact?.name, Validators.required),
      email: new FormControl(this.contact?.email, Validators.required),
      phone: new FormControl(this.contact?.phone, Validators.required)
    });
  }

  updateContact(contact: any) {
    this.updating = false;
    if (contact?.valid) {
      this.loading = true;
      this.phoneService.updateContact({ ...contact?.value }, this.phonebookId, this.contact?.id).pipe(
        finalize(() => {
          this.contactForm.reset();
          this.updated.emit();
          this.loading = false;
        })
      ).subscribe();
    }
  }

  deleteContact() {
    this.updating = false;
    this.loading = true;
    this.phoneService.deleteContact(this.phonebookId, this.contact?.id).pipe(
      finalize(() => {
        this.updated.emit();
        this.loading = false;
      })
    ).subscribe();
  }

}
