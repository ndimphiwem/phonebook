import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebooks.component.html'
})
export class PhonebooksComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,readonly auth: AuthService) { }

  ngOnInit(): void {
  }

}
