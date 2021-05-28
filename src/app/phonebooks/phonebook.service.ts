import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  apiPath = environment.api;
  constructor(readonly http: HttpClient) { }
  
  addPhoneBook(phoneBook: any) {
    const url = `${this.apiPath}/phonebooks`;
    return this.http.post(url, phoneBook);
  }
  
  
  updatePhoneBook(phoneBook: any, id: any) {
    const url = `${this.apiPath}/phonebooks/${id}`;
    return this.http.put(url, phoneBook);
  }
  
  deletePhoneBook(id: any) {
    const url = `${this.apiPath}/phonebooks/${id}`;
    return this.http.delete(url);
  }

  getPhoneBooks() {
    const url = `${this.apiPath}/phonebooks`;
    return this.http.get(url);
  }

  getPhonebook(id: any) {
    const url = `${this.apiPath}/phonebooks/${id}`;
    return this.http.get(url);
  }

  getContacts(phoneBookId: any) {
    const url = `${this.apiPath}/phonebooks/${phoneBookId}/contacts`;
    return this.http.get(url);
  }
  
  addContact(contact: any, phoneBookId: any) {
    const url = `${this.apiPath}/phonebooks/${phoneBookId}/contacts`;
    return this.http.post(url, contact);
  }
  
  updateContact(contact: any, phoneBookId: any, contactId: any) {
    const url = `${this.apiPath}/phonebooks/${phoneBookId}/contacts/${contactId}`;
    return this.http.put(url, contact);
  }
  
  deleteContact(phoneBookId: any, contactId: any) {
    const url = `${this.apiPath}/phonebooks/${phoneBookId}/contacts/${contactId}`;
    return this.http.delete(url);
  }
}
