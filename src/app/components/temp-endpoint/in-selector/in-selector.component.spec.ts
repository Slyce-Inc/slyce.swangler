import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InSelectorComponent } from './in-selector.component';

describe('InSelectorComponent', () => {
  let component: InSelectorComponent;
  let fixture: ComponentFixture<InSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
