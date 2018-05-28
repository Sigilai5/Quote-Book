import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private elem: ElementRef) {
        this.elem.nativeElement.style.backgroundColor = 'green';
    }

    // constructor(private elem: ElementRef) {}
    //
    // @HostListener('click') onClicks() {
    //     this.textDeco('green');
    // }
    //
    // @HostListener('dblclick') onDoubleClicks() {
    //     this.textDeco('clear');
    // }
    //
    // private textDeco(action: string) {
    //     // noinspection JSAnnotator
    //     this.elem.nativeElement.style.backgroundColor = action;
    //
    // }
}
