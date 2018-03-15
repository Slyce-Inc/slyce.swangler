import {SocketObservables} from './socketObservables';

describe('SocketObservable', () => {
  const webSocketMock = {
    onmessage: null,
    onclose: null,
    onopen: null,
    onerror: null
  };
  beforeEach(() => {
  });

  it('should initialize all state observables', () => {
    const socketOb: SocketObservables = new SocketObservables(webSocketMock as WebSocket);
    expect(socketOb.onopen).toBeDefined();
    expect(socketOb.onclose).toBeDefined();
    expect(socketOb.onmessage).toBeDefined();
    expect(socketOb.onerror).toBeDefined();
  });

  it('should trigger on open', () => {
    const socketOb: SocketObservables = new SocketObservables(webSocketMock as WebSocket);
    socketOb.onopen.subscribe(res => {
      expect(res).toBeDefined();
    });
    socketOb.socket.onopen(new Event('HELLO'));
  });

  it('should trigger onerror', () => {
    const socketOb: SocketObservables = new SocketObservables(webSocketMock as WebSocket);
    socketOb.onerror.subscribe(res => {
      expect(res).toBeDefined();
    });
    socketOb.socket.onerror(new Event('HELLO'));
  });

  it('should trigger onmessage', () => {
    const socketOb: SocketObservables = new SocketObservables(webSocketMock as WebSocket);
    socketOb.onmessage.subscribe(res => {
      expect(res).toBeDefined();
    });
    socketOb.socket.onmessage(new MessageEvent('HELLO'));
  });

  it('should trigger onclose', () => {
    const socketOb: SocketObservables = new SocketObservables(webSocketMock as WebSocket);
    socketOb.onclose.subscribe(res => {
      expect(res).toBeDefined();
    });
    socketOb.socket.onclose(new CloseEvent('HELLO'));
  });
});
