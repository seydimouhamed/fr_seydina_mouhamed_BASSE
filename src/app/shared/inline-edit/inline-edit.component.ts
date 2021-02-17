import { element } from 'protractor';
import { Component, OnInit, ViewChild, Renderer2, Input, forwardRef, ElementRef, Output, EventEmitter } from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inlineEditControl') inlineEditControl; // input DOM element
  @Input() label = '';  // Label value for input element
  @Input() type = 'text'; // The type of input element
  @Input() required = false; // Is input requried?
  @Input() disabled = false; // Is input disabled?
  @Output() updateData = new EventEmitter();
  @Input() id = null;
  private _value = ''; // Private variable for input value
   preValue = ''; // The value before clicking to edit
   editing = false; // Is Component in edit mode?
  public onChange: any = Function.prototype; // Trascend the onChange event
  public onTouched: any = Function.prototype; // Trascend the onTouch event

  // Control Value Accessors for ngModel
  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  constructor(element: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }
    // Do stuff when the input element loses focus
    onBlur($event: Event) {
      this.editing = false;
      this.saveChanges();
    }

    // Start the editting process for the input element
    edit(value) {
      if (this.disabled) {
        return;
      }

      this.preValue = value;
      this.editing = true;
      // Focus on the input element just as the editing begins
        // this.element.nativeElement.focus()
      this.inlineEditControl.focus();
      // setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl,
      //   'focus', []));
    }
    saveChanges(): void
    {
      if (this.preValue.trim() !==  this.value.trim()){
        this.updateData.emit({id: this.id, key: this.label, value: this.value});
      }
    }

}
