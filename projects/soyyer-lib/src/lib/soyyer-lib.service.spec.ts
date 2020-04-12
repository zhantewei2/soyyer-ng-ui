import { TestBed } from '@angular/core/testing';

import { SoyyerLibService } from './soyyer-lib.service';

describe('SoyyerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoyyerLibService = TestBed.get(SoyyerLibService);
    expect(service).toBeTruthy();
  });
});
