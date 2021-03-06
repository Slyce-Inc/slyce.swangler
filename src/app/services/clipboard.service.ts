import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ClipboardService {

  constructor(
    public notify: NotificationsService
  ) { }


  fallbackCopyTextToClipboard(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    element.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      this.notify.success('Success', 'Copied to clipboard');
    } catch (err) {
      console.warn('Fallback: Oops, unable to copy', err);
      this.notify.error('Error', 'Failed to copy');
    }

    element.removeChild(textArea);
  }

  writeToClipboard(json, element) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, null, 4);
    }

    if (!navigator['clipboard']) {
      this.fallbackCopyTextToClipboard(json, element);
      return;
    }
    navigator['clipboard'].writeText(json).then(() => {
      this.notify.success('Success', 'Copied to clipboard');
    }, (err) => {
      console.warn('Async: Could not copy text: ', err);
      this.notify.error('Error', 'Failed to copy');
    });
  }
}
