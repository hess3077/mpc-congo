import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIdeasComponent } from './our ideas.component';

describe('OurIdeasComponent', () => {
  let component: OurIdeasComponent;
  let fixture: ComponentFixture<OurIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
