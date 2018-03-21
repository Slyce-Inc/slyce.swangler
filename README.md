# Slyce.Swangler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Web Socket Spec JSON File Documentation
```typescript
class BaseObject {
  socketEndpoints: Array<SocketModel>;
  baseURL: string;
}

export class SocketModel {
  public operationId: string;
  public summary?: string;
  public url: string;
  public parameters: Parameter[];
  public description?: string;
  public consumes: string[];
  public produces: string[];
  public tags?: string[];
  protocol: Array<string>;
  requestMessages: Array<Message>;
  responseMessages: Array<Message>;
  errorMessages: Array<any>;
}
export class Message {
  description: string;
  schema: Schema;
}
export class Parameter {
  in: string;
  name: string;
  required: boolean;
  type: string;
  default?: any;
  description?: string;
  example?: any;
  format?: string;
}
```
  
```javascript
{
    socketEndpoints: [
      {
        operationId: 'test',
        summary: 'test endpoint summary',
        url: '/accounts/{account_id}',
        protocol: [ 'ws', 'wss' ],
        name: 'message',
        description: 'test endpoint description',
        parameters: [
          {
            in: 'path',
            name: 'account_id',
            type: 'string',
            default: 'slyce_id',
            required: true,
          }
        ],
        consumes: [
          'application/json'
        ],
        produces: [
          'application/json'
        ],
        tags: [
          'Accounts'
        ],
        requestMessages: [
          {
            required: true,
            type: 'object',
            description: 'message to send 2',
            schema: {
              type: 'object',
              properties: {
                workflow_options: {
                  type: 'object',
                  properties: {
                    key: {
                      type: 'string',
                      required: true
                    }
                  }
                },
                image_bytes: {
                  type: 'string',
                  format: 'byte'
                }
              }
            }
          }
        ],
        responseMessages: [
          {
            description: 'response message 1',
            schema: {
              type: 'object',
              properties: {
                msg_type: {
                  type: 'string'
                },
                workflow_options: {
                  type: 'object',
                  properties: {
                    key: {
                      type: 'string'
                    }
                  }
                },
                demo_mode: {
                  type: 'string'
                }
              }
            }
          }
        ],
        baseURL: 'ws://localhost:8001'
      }
    ]
  };
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
