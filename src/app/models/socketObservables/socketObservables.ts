import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class SocketObservables {
  public onopen;
  public onclose;
  public onmessage;
  public onerror;
  public socket: WebSocket;

  constructor(socket: WebSocket) {
    this.onopen = new BehaviorSubject(null);
    this.onclose  = new BehaviorSubject(null);
    this.onmessage  = new BehaviorSubject(null);
    this.onerror  = new BehaviorSubject(null);

    this.socket = socket;

    this.socket.onopen = evt => {
      this.onopen.next(evt);
    };
    this.socket.onmessage = evt => {
      this.onmessage.next(evt);
    };
    this.socket.onerror = evt => {
      this.onerror.next(evt);
    };
    this.socket.onclose = evt => {
      this.onclose.next(evt);
    };
  }
}
