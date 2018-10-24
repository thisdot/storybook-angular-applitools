import { Component, Input, forwardRef, OnChanges, SimpleChanges, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'editable',
  template: `
        <div [ngStyle]="styles" [innerHTML]="contentValue" (input)="setContent($event)" contenteditable="true"></div>
    `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContentEditableComponent),
      multi: true
    }
  ]
})
export class ContentEditableComponent
  implements ControlValueAccessor {
  private _styles: any;
  private _contentValue: any;

  propagateChange: (value: any) => void = () => {};

  @Input()
  set styles(style: any) {
    this._styles = style;
  }

  get styles(): any {
    return this._styles;
  }

  get contentValue(): any {
    return this._contentValue;
  }

  set contentValue(val: any) {
    if (this._contentValue !== val) {
      this._contentValue = val;
      this.propagateChange(val);
    }
  }

  writeValue(value: any) {
    if (value !== this._contentValue) {
      this.contentValue = value;
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void) {}

  setContent($event: any): void {
    // this._contentValue = $event.target.innerHTML;
    this.propagateChange($event.target.innerHTML);
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
