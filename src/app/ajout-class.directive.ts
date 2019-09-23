import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class AjoutClassDirective implements OnInit {
  endX = 0;
  endY = 0;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
   
  }

  ajoutClass(event:any){
    this.renderer.addClass(event.target, 'wild');
  }

  dragMoved(e, action) {
    // record new position
    this.endX = e.pointerPosition.x;
    this.endY = e.pointerPosition.y;
    console.log(this.endX);
   // this.renderer.setStyle(e.source.element.nativeElement, 'display', 'block');
   // this.renderer.setStyle(e.source.element.nativeElement, 'display', 'block');
   this.renderer.addClass(this.el.nativeElement, 'wild');
    //this.renderer.setStyle(e.source.element.nativeElement, 'background-color', 'green');
    // logic to set startX and startY
    // TRYING TO CHANGE CARD BORDER COLOR IF this.endX - this.startX > some number
}
 
}
