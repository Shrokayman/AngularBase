import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighToLowComponent } from './high-to-low.component';

describe('HighToLowComponent', () => {
  let component: HighToLowComponent;
  let fixture: ComponentFixture<HighToLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighToLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighToLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
