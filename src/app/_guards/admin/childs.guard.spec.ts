import { TestBed } from '@angular/core/testing';

import { ChildsGuard } from './childs.guard';

describe('ChildsGuard', () => {
  let guard: ChildsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
