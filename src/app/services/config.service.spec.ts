import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ConfigService]
      });
      // Returns a service with the MockBackend so we can test with dummy responses
      service = TestBed.get(ConfigService);
      // Inject the http service and test controller for each test
      httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
