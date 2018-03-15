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


const MOCK = {
  socketEndpoints: [
    {
      operationId: 'test',
      summary: 'test endpoint summary',
      url: '/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}',
      protocol: [ 'ws', 'wss' ],
      parameters: [
        {
          in: 'path',
          name: 'account_id',
          type: 'string',
          required: true,
        },
        {
          in: 'path',
          name: 'space_id',
          type: 'string',
          required: true,
        },
        {
          in: 'path',
          name: 'workflow_id',
          type: 'string',
          required: true,
        },
        {
          in: 'query',
          name: 'slyce-account-id',
          required: true,
          type: 'string',
          example: 'slyce_id',
        },
        {
          in: 'query',
          name: 'slyce-api-key',
          required: true,
          type: 'string',
          example: 'slyce_api_key',
        }
      ],
      description: 'test endpoint description',
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
          description: 'message to send 1',
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
                    type: 'string',
                    required: true
                  }
                }
              },
              demo_mode: {
                type: 'string'
              },
              image_url: {
                type: 'string'
              }
            }
          }
        },
        {
          description: 'message to send 2',
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
                    type: 'string',
                    required: true
                  }
                }
              },
              demo_mode: {
                type: 'string'
              },
              image_bytes: {
                type: 'string'
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
              },
              image_url: {
                type: 'string'
              }
            }
          }
        }
      ],
      errorMessages: [
        {
          description: 'error message',
          schema: {
            type: 'object',
            properties: {
              errors: {
                type: 'array',
                items: {
                  type: 'any'
                }
              }
            }
          }
        }
      ]
    }
  ],
  baseURL: 'ws://localhost:8001'
};
