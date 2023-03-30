import { TestBed } from '@angular/core/testing';

import { ListeRecruesService } from './liste-recrues.service';

describe('ListeRecruesService', () => {
  let service: ListeRecruesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeRecruesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
