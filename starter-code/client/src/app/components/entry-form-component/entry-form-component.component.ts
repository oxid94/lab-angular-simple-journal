import { Component, OnInit, Input } from '@angular/core';
import { EntriesService } from '../../services/entries.service';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css'],
  providers: [EntriesService]
})
export class EntryFormComponentComponent implements OnInit {

  constructor(private theEntries: EntriesService) { }

  ngOnInit() {
  }

  addSingleEntry(body) {
    this.theEntries.addSingleEntry(body.form._value)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
