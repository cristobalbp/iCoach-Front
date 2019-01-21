import { ControlValueAccessor } from '@angular/forms';
import { ElementRef, Renderer } from '@angular/core';
export declare class RutValueAccessor implements ControlValueAccessor {
    private renderer;
    private elementRef;
    constructor(renderer: Renderer, elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
