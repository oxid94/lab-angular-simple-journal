import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormComponentComponent } from './entry-form-component.component';

describe('EntryFormComponentComponent', () => {
  let component: EntryFormComponentComponent;
  let fixture: ComponentFixture<EntryFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
