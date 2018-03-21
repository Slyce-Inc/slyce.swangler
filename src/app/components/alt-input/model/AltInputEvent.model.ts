export class AltInputEventModel {
  public static EVENT_TYPES = {
    'DATA': 'DATA',
    'DELETE': 'DELETE',
    'APPLY' : 'APPLY'
  };
  public eventType: string;
  public data?: string;
  constructor(eventType: string, data?: string) {
    this.eventType = eventType;
    this.data = data;
  }
}
