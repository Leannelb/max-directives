import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHilight]'
})

export class BasicHilightDirective implements OnInit {
    constructor(private elementRef: ElementRef){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}