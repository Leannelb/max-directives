import { 
  Directive, 
  ElementRef, 
  Renderer2,
  HostListener,
  HostBinding,
  Input,
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // if you set the provide an alias for the input, the same as the selector 

  @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
   this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
