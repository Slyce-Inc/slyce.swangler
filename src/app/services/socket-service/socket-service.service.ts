import { Injectable } from '@angular/core';
import {SocketObservables} from '../../models/socketObservables/socketObservables';

@Injectable()
export class SocketServiceService {
  constructor() {
  }
  public connect (url: string): SocketObservables {
    const webSocket = new WebSocket(url);
    const socketObservables: SocketObservables = new SocketObservables(webSocket);
    return(socketObservables);
  }
}
