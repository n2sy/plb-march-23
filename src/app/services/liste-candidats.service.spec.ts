import { TestBed } from '@angular/core/testing';

import { ListeCandidatsService } from './liste-candidats.service';

describe('ListeCandidatsService', () => {
  let service: ListeCandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeCandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
