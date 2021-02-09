import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appComponentAction]'
})
export class ComponentActionDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = 'grainsboro';
   // this.el.nativeElement.style.color = ' #fff';
    this.renderer.addClass( this.el.nativeElement, 'visibleaction');
    this.renderer.removeClass( this.el.nativeElement, 'visibleprofil');

  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = null;
    // this.el.nativeElement.classList.remove('mat-elevation-Z8');
    this.renderer.addClass( this.el.nativeElement, 'visibleprofil');
    this.renderer.removeClass( this.el.nativeElement, 'visibleaction');

  }
}
