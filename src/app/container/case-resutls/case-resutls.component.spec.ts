import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseResutlsComponent } from './case-resutls.component';

describe('CaseResutlsComponent', () => {
  let component: CaseResutlsComponent;
  let fixture: ComponentFixture<CaseResutlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseResutlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseResutlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
