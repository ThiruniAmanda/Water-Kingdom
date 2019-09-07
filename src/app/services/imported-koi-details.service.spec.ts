import { TestBed } from '@angular/core/testing';

import { ImportedKoiDetailsService } from './imported-koi-details.service';

describe('ImportedKoiDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportedKoiDetailsService = TestBed.get(ImportedKoiDetailsService);
    expect(service).toBeTruthy();
  });
});
