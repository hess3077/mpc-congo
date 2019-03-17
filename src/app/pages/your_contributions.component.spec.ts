import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourContributionsComponent } from './your contributions.component';

describe('YourContributionsComponent', () => {
  let component: YourContributionsComponent;
  let fixture: ComponentFixture<YourContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
