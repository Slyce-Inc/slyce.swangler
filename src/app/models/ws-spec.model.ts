import { Schema } from './endpoint/endpoint.model';


export class WsSpecModel {
  socketEndpoints: Array<SocketModel>;
  baseURL: string;
}

export class SocketModel {
  operationId: string;
  summary: string;
  url: string;
  protocol: Array<string>;
  parameters: Array<Parameter>;
  description: string;
  consumes: Array<string>;
  produces: Array<string>;
  tags: Array<string>;
  requestMessages: Array<Message>;
  responseMessages: Array<Message>;
  errorMessages: Array<any>; // TBD
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
}
