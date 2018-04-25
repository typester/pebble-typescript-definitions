declare namespace Pebble {
  type EventType = 'ready' | 'showConfiguration' | 'webviewclosed';
  type EventCallback = (event: Event) => void;

  interface Event {
    type: EventType;
    payload: any;
    response: any;
  }

  interface Interface {
    addEventListener: (type: EventType, callback: EventCallback) => void;
    openURL: (url: string) => void;
  }
}

declare const Pebble: Pebble.Interface;



