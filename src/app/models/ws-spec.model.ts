import {Endpoint, Schema} from './endpoint/endpoint.model';



export class WsSpecModel {
  socketEndpoints: Array<SocketModel>;
  baseURL: string;
}

export class SocketModel extends Endpoint {
  protocol: Array<string>;
  requestMessages: Array<Message>;
  responseMessages: Array<Message>;
  errorMessages: Array<any>; // TBD
}

export class Message {
  description: string;
  schema: Schema;
}
