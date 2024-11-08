import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2)
  {
    this.hideElement();
  }

  public hideElement() {
    this.renderer.addClass(this.element.nativeElement, 'opacity-0');
    this.renderer.addClass(this.element.nativeElement, 'translate-y-10');
    this.renderer.removeClass(this.element.nativeElement, 'opacity-100');
    this.renderer.removeClass(this.element.nativeElement, 'translate-y-0');
  }

  private revealElement() {
    this.renderer.removeClass(this.element.nativeElement, 'opacity-0');
    this.renderer.removeClass(this.element.nativeElement, 'translate-y-10'); // Optional for sliding effect
    this.renderer.addClass(this.element.nativeElement, 'opacity-100');
    this.renderer.addClass(this.element.nativeElement, 'translate-y-0');
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {

    const elementPosition = this.element.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (viewportHeight > elementPosition) {
      this.revealElement()
    } else {
      this.hideElement()
    }
  }


}
