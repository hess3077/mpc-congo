import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulDocumentsComponent } from './useful_documents.component';

describe('UsefulDocumentsComponent', () => {
  let component: UsefulDocumentsComponent;
  let fixture: ComponentFixture<UsefulDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
