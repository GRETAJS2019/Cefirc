import { TestBed } from '@angular/core/testing';

import { QuestionsTabService } from './questions-tab.service';

describe('QuestionsTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsTabService = TestBed.get(QuestionsTabService);
    expect(service).toBeTruthy();
  });
});
