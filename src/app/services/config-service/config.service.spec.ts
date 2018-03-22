import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import {HttpClientModule} from '@angular/common/http';

describe('ConfigService', () => {
  let configService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService],
      imports: [HttpClientModule]
    });
    configService = TestBed.get(ConfigService);

  });
  it('should be created', function () {
    expect(configService).toBeTruthy();
  });
  it('should load config file', function () {
    configService.initConfigService().then(res => {
      expect(res).toBeTruthy();
    });
  });
});
