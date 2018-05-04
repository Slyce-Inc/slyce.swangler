import {Endpoint, Schema} from './endpoint/endpoint.model';
import {SecurityDefinition, SecurityEntity} from './auth/security-definition';



export class WsSpecModel {
  socketEndpoints: Array<SocketModel>;
  baseURL: string;
}

export class SocketModel extends Endpoint {
  protocol: Array<string>;
  requestMessages: Array<Message>;
  responseMessages: Array<Message>;
  errorMessages: Array<any>; // TBD
  securityParameters: Array <SecurityEntity>;
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
