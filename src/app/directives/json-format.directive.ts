import { Directive, Renderer2, ElementRef, OnChanges, Input, SimpleChanges } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Directive({
  selector: '[appJsonFormat]'
})
export class JsonFormatDirective implements OnChanges {

  @Input() json;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.json.currentValue) {
      const options = {
        hoverPreviewEnabled: true,
        hoverPreviewArrayCount: 100,
        hoverPreviewFieldCount: 2,
      };

      if (typeof this.json === 'string') {
        this.json = JSON.parse(this.json);
      }

      this.el.nativeElement.innerHTML = '';

      const formatter = new JSONFormatter(this.json, 3, options);
      const elem = formatter.render();
      this.renderer.appendChild(this.el.nativeElement, elem);
    }

  }

}
