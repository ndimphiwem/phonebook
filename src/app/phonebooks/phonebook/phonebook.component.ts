import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html'
})
export class PhonebookComponent implements OnInit {

  @Input() phonebook: any;
  @Output() updated: EventEmitter<any> = new EventEmitter<any>();

  phonebookForm: any;
  loading = false;
  updating = false;
  constructor(readonly phoneService: PhonebookService) { }

  ngOnInit(): void {
    this.phonebookForm = new FormGroup({
      name: new FormControl(this.phonebook?.name, Validators.required),
      description: new FormControl(this.phonebook?.description)
    });
  }

  updatePhonebook(phonebook: any) {
    this.updating = false;
    if (phonebook?.valid) {
      this.loading = true;
      this.phoneService.updatePhoneBook({
        ...phonebook?.value,
        userId: this.phonebook?.userId
      }, this.phonebook?.id).pipe(
        finalize(() => {
          this.phonebookForm.reset();
          this.updated.emit();
          this.loading = false;
        })
      ).subscribe();
    }
  }

  deletePhonebook() {
    this.updating = false;
    this.loading = true;
    this.phoneService.deletePhoneBook(this.phonebook?.id).pipe(
      finalize(() => {
        this.phonebookForm.reset();
        this.updated.emit();
        this.loading = false;
      })
    ).subscribe();
  }

}
