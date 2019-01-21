import { Renderer, ElementRef, EventEmitter } from '@angular/core';
export declare class RutDirective {
    private elementRef;
    private renderer;
    rutChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, renderer: Renderer);
    onFocus(value: string): void;
    onBlur(value: string): void;
    onChange(value: string): void;
}
