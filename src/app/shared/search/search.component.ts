import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() searchUpdated: EventEmitter<string> = new EventEmitter<string>();

  searchField = new FormControl('');
  searching = false;


  constructor() { }

  ngOnInit(): void {
    this.searchField.valueChanges.pipe(
      tap(() => this.searching = true),
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(searchString => {
      this.searchUpdated.emit(searchString);
      this.searching = false;
    });
  }

  clearSearchResults() {
    this.searchField.setValue('');
  }

}
