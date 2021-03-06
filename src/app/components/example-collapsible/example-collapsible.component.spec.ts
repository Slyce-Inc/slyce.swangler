import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleCollapsibleComponent} from './example-collapsible.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {SwaggerService} from '../../services/swagger.service';
import {ParamConsoleComponent} from '../param-console/param-console.component';
import {Schema} from '../../models/endpoint/endpoint.model';
import {By} from '@angular/platform-browser';
import {REQUEST_SCHEMA, RESPONSE_SCHEMA, SCHEMA_ARRAY_EXAMPLE} from '../../models/MOCK_DATA';
import {Input, Directive} from '@angular/core';
import '../../../assets/js/helpers.js';
import {ClipboardService} from '../../services/clipboard.service';

const SwaggerServiceStub: Partial<SwaggerService> = {
  getApiData: () => {
    return Observable.of(null);
  }
};

const ClipboardServiceStub: Partial<ClipboardService> = {
  writeToClipboard: (json, element) => {
    return json;
  }
};

@Directive({
  // tslint:disable-next-line
  selector: '[appJsonFormat]',
})
class MockBsModalDirective {
  @Input() json;
}

describe('ExampleCollapsibleComponent', () => {
  let component: ExampleCollapsibleComponent;
  let fixture: ComponentFixture<ExampleCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCollapsibleComponent, ParamConsoleComponent, MockBsModalDirective],
      providers: [
        {provide: SwaggerService, useValue: SwaggerServiceStub},
        {provide: ClipboardService, useValue: ClipboardServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCollapsibleComponent);
    component = fixture.componentInstance;
    component.schema = RESPONSE_SCHEMA;
    component.header = 'test';
    component.type = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init lazy sample generator', () => {
    spyOn(component.swaggerService, 'getApiData').and.returnValue(Observable.of(null));
    spyOn(component, 'setSampleFromSchema');

    component.initLazySampleGenrator();

    expect(component.swaggerService.getApiData).toHaveBeenCalled();
    expect(component.generatedSample).toEqual(null);

    component.collapsed = false;
    component.initLazySampleGenrator();
    expect(component.setSampleFromSchema).toHaveBeenCalled();
  });

  it('should toggle collapse', () => {
    spyOn(component, 'setSampleFromSchema');
    expect(component.collapsed).toBeTruthy();
    component.toggleCollapse();
    expect(component.collapsed).toBeFalsy();
    expect(component.setSampleFromSchema).toHaveBeenCalled();
  });

  it('should generate sample', () => {
    const sample = component.generateSample(component.schema);
    try {
      JSON.parse(sample);
      expect(true).toBeTruthy();
    } catch (e) {
      fail(e);
    }
  });

  it('should generate sample from object', () => {
    const res = component.generateSampleFromObject(component.schema);
    expect(res).toEqual('{ \n' +
      '"sampleItems" : ["string"],"items" : [\n' +
      '{ \n' +
      '"created_at": "2018-01-04T20:13:55.373557+0000","created_by": "system","updated_at": "2018-01-04T20:13:55.373557' +
      '+0000","updated_by": "system","id": "test_inc","name": "Test, Inc.","is_active": null}],"page_number": 1,"page_s' +
      'ize": 20,"total_pages": 1,"total_items": 1}');
  });

  it('should generate sample from object with examples even if no property field exist for examples', () => {
    const res = component.generateSampleFromObject(REQUEST_SCHEMA);
    expect(res).toEqual('{ \n' +
      '"name": "DemoAPIKey","acl" : { \n' +
      '"create-space": false,"get-space-by-id": true}}');
  });

  it('should generate sample from array', () => {
    const responseSchema = component.schema as Schema;
    const res = component.generateSampleFromArray(responseSchema.properties.items);
    expect(res).toEqual('[\n' +
      '{ \n' +
      '"created_at": "2018-01-04T20:13:55.373557+0000","created_by": "system","updated_at": "2018-01-04T20:13:55.37355' +
      '7+0000","updated_by": "system","id": "test_inc","name": "Test, Inc.","is_active": null}]');
  });

  it('should generate sample from array if no sample for that array is provided instead provide datatype', () => {
    const responseSchema = component.schema as Schema;
    const res = component.generateSampleFromArray(responseSchema.properties.sampleItems);
    expect(res).toEqual('["string"]');
  });

  it('should set sample from schema', () => {
    spyOn(component, 'generateSample').and.returnValue('{"test": "test"}');
    expect(component.generatedSample).toBeFalsy();
    component.setSampleFromSchema((component.schema));

    expect(component.generateSample).toHaveBeenCalled();
    expect(component.generatedSample.highlight.replace(/(\r\n\t|\n|\r\t|\s\s\s\s)/gm, ''))
      .toEqual('{<span class="hljs-attr">"test"</span>: <span class="hljs-string">"test"</span>}');

    expect(component.generatedSample.json.replace(/(\r\n\t|\n|\r\t)|\s\s\s\s/gm, ''))
      .toEqual('{"test": "test"}');
  });

  it('should toggle collapse', () => {
    expect(component.collapsed).toBeTruthy();
    const collapseElem = fixture.debugElement.query(By.css('.collapsable-nav-header')).nativeElement;
    collapseElem.click();
    expect(component.collapsed).toBeFalsy();
  });

  it('should emit value on click', () => {
    component.type = 'sample';
    component.generatedSample = {};
    component.generatedSample.json = 'test';
    fixture.detectChanges();
    const pre = fixture.debugElement.query(By.css('.sample-body')).nativeElement;

    component.clickedSample.subscribe(data => {
      expect(data).toEqual('test');
    });
    pre.click();
  });

  it('should render app-param-console', () => {
    component.type = 'schema';
    fixture.detectChanges();
    const paramConsole = fixture.debugElement.query(By.css('app-param-console ')).nativeElement;
    expect(paramConsole).toBeTruthy();
  });

  it('should not render app-param-console', () => {
    component.type = 'sample';
    fixture.detectChanges();
    const paramConsole = fixture.debugElement.query(By.css('app-param-console '));
    expect(paramConsole).toBeFalsy();
  });
  it('should simulate copy to clipboard', () => {
    spyOn(component.clipboardService, 'writeToClipboard');

    component.type = 'sample';
    component.generatedSample = {};
    component.generatedSample.json = 'test';
    fixture.detectChanges();
    const copyButton = fixture.debugElement.query(By.css('.copy-to-clipboard')).nativeElement;

    copyButton.click();

    expect(component.clipboardService.writeToClipboard).toHaveBeenCalled();
  });
  it('should set array example when generating example body', () => {
    const sample = component.generateSample(SCHEMA_ARRAY_EXAMPLE);
    expect(sample).toBe('{ \n' +
      '"dataset_type": "dataset","name": "DemoDataset","image_url_keys" : ["imageURL"],"searchable_keys" : ["productName"]' +
      ',"facetable_keys" : ["productGender"],"copy_from": "none"}');
  });
});
