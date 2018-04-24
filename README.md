# Slyce.Swangler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.
Swangler (like Strangler) is a recreation of SwaggerUI with basic WebSocket Support.

The two below spec files both are independent files but are later combined by the application.

## Deployment Notes for Forge
### add subtree to repository of choice
git subtree add --prefix api/app/lib/openapi/swangler https://github.com/Slyce-Inc/slyce.swangler.git swangler-dist --squash

### if subtree already added,to update to latest release build of swangler
git subtree pull --prefix api/app/lib/openapi/swangler https://github.com/Slyce-Inc/slyce.swangler.git swangler-dist --squash

## REST Endpoint Spec JSON File Documentation (v1.2^)
Specifications similar to https://swagger.io/specification/

## Web Socket Endpoint Spec JSON File Documentation (v2.0^)
Below is the schema for the construction of the Web Socket Spec Json File.
*** Where there are ? These question marks indicate that the parameter is optional.
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
  public protocol: Array<string>;
  public requestMessages: Array<Message>;
  public responseMessages: Array<Message>;
  public errorMessages: Array<any>;
}
export class Message {
  public description: string;
  public schema: Schema;
}
export class Parameter {
  public in: string;
  public name: string;
  public required: boolean;
  public type: string;
  public default?: any;
  public description?: string;
  public example?: any;
  public format?: string;
}
```

**BaseObject**

Base Object that should be returned when the Web Socket Spec File is loaded.

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| socketEndpoints      				| Array(SocketModel)  | List of WebSocket Endpoints |
| basePath                     | string ?              | The base path that is attached to the host link for all of the WebSocket Endpoints relative urls to use (if not available, resort to empty string)|
| host                     | string ?             | The host of the server that is hosting the service desired (if not available, resort to host of Swangler) |

**SocketModel**

SocketModel Object that represents the existence of each web socket endpoint

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| operationId    | string | provide unique name + id for this endpoint |
| summary | string? | summary of the significannce of the endpoint |
| url | string | relative url to the baseURL of BaseObject |
| parameters | Array(Parameter) | A list of parameters that the endpoint accepts |
| description | string ? | a description of the endpoint |
| consumes | Array(string) | a list of what the endpoint consumes ex. 'application/json' | 
| produces | Array(string) | a list of what the endpoint produces ex. 'appliation/json' | 
| tags | Array(string) ? | a list of which nav side bar tag the endpoint will appear under, if none then it will appear under 'NO_TAG'|
| protocol| Array(string) ? | a list of which protocol to use when calling this endpoint (either ws | wss) (if not available, resort to ws)|
| requestMessages | Array(Message) | a list of message bodies that the endpoint will be expecting | 
| responseMessages | Array(Message) | a list of message bodies that the endpoitn will be responding with |
| errorMessages | Array(Message) ?| a list of error message bodies that the endpoint will be responding with |

**Message**

Message Object that represents each possible response or request message to and from the endpoint

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| description| string | a description of the message, perhaps what it is used for | 
| schema | Schema | an object that represents the blueprints of an object | 

**Parameter**

Parameter Object that represents each parameter in a schema 

| Key                           | Type     | Description |
|-------------------------------|----------|-------------|
| name | string | name of the parameter. aka the key of the object
| in | string | The location of the parameter. Possible values are "query", "header", "path" or "cookie".
| required | boolean | Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.|
| type | string | the data type of the parameter... more info on supported types | 
| default | any? | the default value of this parameter | 
| description | string? | the description that describes the purpose of this parameter | 
| example | any? | an example value for this parameter to appear in the example sample | 
| format | string? | the format of the parameter ex. string of hexadecimal where hexadecimal is the format and string is the type|


  Here is a small sample of an endpoint. The below data for the endpoint is not sufficient to make a call to this specific forge endpoint but, is enough for an example.
  
```javascript
{
    socketEndpoints: [
      {
        operationId: 'test',
        summary: 'test endpoint summary',
        url: '/accounts/{account_id}',
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
