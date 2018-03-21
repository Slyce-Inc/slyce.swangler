import { JsonFormatDirective } from './json-format.directive';
import { Component, ElementRef } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appJsonFormat [json]="{test: 'test'}"></div>`
})
class TestComponent {
}

const fakeRenderer = {
  destroyNode: () => true,
  appendChild: () => true,
};

describe('JsonFormatDirective', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, JsonFormatDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should init directive', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new JsonFormatDirective(el, fakeRenderer as any);
    directive.ngOnChanges( { json: { currentValue: 'test' }} as any );
    expect(directive).toBeTruthy();
  });

  it('should create string', () => {
    fixture.detectChanges();
    const formatter = fixture.debugElement.nativeElement.querySelector('.json-formatter-row');
    expect(formatter).toBeTruthy();
  });
});
