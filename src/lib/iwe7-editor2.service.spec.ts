import { TestBed, inject } from '@angular/core/testing';

import { Iwe7Editor2Service } from './iwe7-editor2.service';

describe('Iwe7Editor2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Iwe7Editor2Service]
    });
  });

  it('should be created', inject([Iwe7Editor2Service], (service: Iwe7Editor2Service) => {
    expect(service).toBeTruthy();
  }));
});
