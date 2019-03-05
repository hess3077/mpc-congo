import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAreaComponent } from './quote-area.component';

describe('QuoteAreaComponent', () => {
  let component: QuoteAreaComponent;
  let fixture: ComponentFixture<QuoteAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
