import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShadowOver]'
})
export class ShadowOverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
   // renderer.addClass( el.nativeElement, 'mat-elevation-z8');
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.addClass( this.el.nativeElement, 'mat-elevation-z8');

  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.classList.add('mat-elevation-Z8');
    // this.renderer.addClass( this.el.nativeElement, 'mat-elevation-z8');

  }
}
