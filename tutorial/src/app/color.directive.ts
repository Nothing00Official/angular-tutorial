import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorDirective]'
})
export class ColorDirective {

  @Input() color: string;

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    alert("Il colore è " + this.color)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.colorize(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorize(null);
  }

  private colorize(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}