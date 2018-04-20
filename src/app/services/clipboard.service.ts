import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ClipboardService {

  constructor(
    public notify: NotificationsService
  ) { }


  fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
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

    document.body.removeChild(textArea);
  }

  writeToClipboard(json) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, null, 2);
    }

    if (!navigator['clipboard']) {
      this.fallbackCopyTextToClipboard(json);
      return;
    }
    navigator['clipboard'].writeText(json).then(function() {
      this.notify.success('Success', 'Copied to clipboard');
    }, function(err) {
      console.warn('Async: Could not copy text: ', err);
      this.notify.error('Error', 'Failed to copy');
    });
  }
}
