import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntriesService]
})
export class SingleEntryComponent implements OnInit {
  entry: Object = {};
  // entry$: Observable<Object>;

  constructor(private theEntry: EntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.getSingleEntry(params['id']);
    });
  }

  getSingleEntry(id){
    this.theEntry.getSingleEntry(id).subscribe((entry) => {
      console.log(entry)
      this.entry = entry
    });
  }

}
