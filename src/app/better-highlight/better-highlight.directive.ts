import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
