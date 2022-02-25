import { TestBed } from '@angular/core/testing';

import { ChildrenGuard } from './children.guard';

describe('ChildrenGuard', () => {
  let guard: ChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
