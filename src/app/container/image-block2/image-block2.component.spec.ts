import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlock2Component } from './image-block2.component';

describe('ImageBlock2Component', () => {
  let component: ImageBlock2Component;
  let fixture: ComponentFixture<ImageBlock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBlock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
