import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Property,
  Schema
} from '../../models/endpoint/endpoint.model';
import * as hl from '../../../../node_modules/highlight.js/';
import {SwaggerService} from '../../services/swagger.service';
import { ClipboardService } from '../../services/clipboard.service';



@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {
  // Header of the collapsable
  @Input() header;
  // Show the Sample or the Schema
  @Input() type: string; // sample or schema
  // Schema Object
  @Input() schema: Schema;
  // Returns string of the schema sample
  @Output() clickedSample: EventEmitter<any> = new EventEmitter();

  // Socket Options
  public collapsed = true;
  public Object = Object;
  public generatedSample = null;
  constructor(
    public swaggerService: SwaggerService,
    public clipboardService: ClipboardService
  ) {
  }

  ngOnInit() {
    this.initLazySampleGenrator();
  }
  initLazySampleGenrator() {
    if (!this.collapsed && !this.generatedSample) {
      this.setSampleFromSchema(this.schema);
    }
    this.swaggerService.getApiData().subscribe( res => {
      // If the swagger service reinitializes, then regeneration of the generated samples are required.
      this.generatedSample = null;
    });
  }


  toggleCollapse() {
    this.collapsed = !this.collapsed;
    if (!this.collapsed) {
      this.setSampleFromSchema(this.schema);
    }
  }
  public setSampleFromSchema(schema) {
    if (!this.generatedSample) {
      let temp = this.generateSample(schema);
      temp = JSON.stringify(JSON.parse(temp), null, 4);
      this.generatedSample = {};
      this.generatedSample['highlight'] = hl.highlight('json', temp).value;
      this.generatedSample['json'] = temp;
    }
  }

  generateSample(schema) {
    if (schema.type === 'object') {
      const s1 = this.generateSampleFromObject(schema);
      return (s1);
    } else if (schema.type === 'array') {
      const s2 = this.generateSampleFromArray(schema);
      return (s2);
    }
  }

  generateSampleFromArray(schema) {
    let temp = '[';
    if (schema.example != null && ((schema.example.constructor === Array && schema.example.length > 0) ||
        !(schema.example.constructor === Array))) {
        let example = null;
        if (schema.example.constructor !== Array) {
          example = [schema.example];
        } else {
          example = schema.example;
        }
        temp = temp + example.map( e => {
        if (typeof e === 'string') {
          return `"${e.escapeSpecialChars()}"`;
        } else if ( typeof e === 'object') {
          return JSON.stringify(e);
        } else {
          return e;
        }
      }).join(',');
    } else if (schema.items) {
      if ( schema.items.type ) {
        if ( schema.items.type.toLowerCase() === 'object' || schema.items.type.toLowerCase() === 'array') {
          temp = temp + '\n';
          temp = temp + this.generateSample(schema.items);
        } else if ( schema.items.example != null && ((schema.items.example.constructor === Array && schema.items.example.length > 0) ||
            !(schema.items.example.constructor === Array))) {
          const example = schema.items.example;
          let resExample = null;
          if (typeof example === 'string') {
            resExample =  `"${example.escapeSpecialChars()}"`;
          } else if ( typeof example === 'object') {
            resExample =  JSON.stringify(example);
          } else {
            resExample =  example;
          }
          temp = temp + `${resExample}`;
        } else {
          const type = schema.items.type ? schema.items.type.toString().escapeSpecialChars() : schema.items.type ;
          temp = temp + `"${type}"`;
        }
      }
    }
    temp = temp + ']';
    return (temp);
  }

  generateSampleFromObject(schema) {
      if (!schema.properties) {
        schema.properties = {};
      }
      if (schema.example) {
          Object.keys(schema.example).forEach(exampleName => {
            if (!schema.properties[exampleName]) {
              schema.properties[exampleName] = {};
            }
            schema.properties[exampleName]['example'] = schema.example[exampleName];
          });
      }
        let temp = '{ \n';
        const keys = Object.keys(schema.properties);
        for (let i = 0 ; i < keys.length; i ++) {
          if (schema.properties.hasOwnProperty(keys[i])) {
            temp = `${temp}"${keys[i]}"`;
            if (schema.properties[keys[i]].type != null && (schema.properties[keys[i]].type.toLowerCase() === 'object' ||
                schema.properties[keys[i]].type.toLowerCase() === 'array')) {
              const schema2 = schema.properties[keys[i]];
              temp = temp + ' : ' + this.generateSample(schema2);
            } else {
              const property: Property = schema.properties[keys[i]];
              let example = (property.example && typeof property.example === 'string')
                ? property.example.toString().escapeSpecialChars() : property.example ;
                if (example === undefined) {
                  example = null;
                }
                if (typeof example === 'string') {
                  temp = `${temp}: "${example}"`;
                } else if (typeof example === 'object') {
                  temp = `${temp}: ${JSON.stringify(example)}`;
                } else {
                  temp = `${temp}: ${example}`;
                }
            }
            if ( i < keys.length - 1 ) {
              temp = temp + ',';
            }
          }
        }
        temp = temp + '}';
        return (temp);
  }

  copyRawResponse(json, event) {
    // event element needed in order to append a hidden textarea to its source element and avoid page jumping
    this.clipboardService.writeToClipboard(json, event.srcElement);
  }
}




