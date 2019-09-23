import { Directive,Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-enchainnement',
  templateUrl: './enchainnement.component.html',
  styleUrls: ['./enchainnement.component.css'],
  animations: [
    trigger('openClose', [

      state('open', style({
       // position:'absolute',
       opacity:1
      })),
      state('closed', style({
      //  position:'absolute',
        opacity:0
      })),

      state('assetsbodycoloropened', style({
        // position:'absolute',
         backgroundColor:'#d6d6d6',
       })),
       state('assetsbodycolorclosed', style({
       backgroundColor:'transparent',
       })),



      state('closedclicked', style({
        marginLeft:'150px' ,
        transform: 'rotate(360deg)' ,
      })),
      state('openclicked', style({
        marginRight:'150px' ,
      })),

      
    /*  state('openbodyMove', style({
      position:'relative',
        left:'70px'
      })),

      state('closebodyMove', style({
        position:'relative',
        left:'0px'
      })),
*/
      transition('closebodyMove => openbodyMove', [
        animate('.5s')
      ]),

      transition('openbodyMove => closebodyMove', [
        animate('.5s')
      ]),

      transition('closedclicked => openclicked', [
        animate('.5s')
      ]),
      transition('openclicked => closedclicked', [
        animate('.5s')
      ]),
      transition('open => closed', [
        animate('.7s')
      ]),
      transition('closed => open', [
        animate('.7s')
      ]),

      transition('assetsbodycoloropened => assetsbodycolorclosed', [
        animate('.5s')
      ]),
      transition('assetsbodycolorclosed => assetsbodycoloropened', [
        animate('.5s')
      ]),

    ])
  ]
})


export class EnchainnementComponent implements OnInit {
  assetOuvert:boolean = true;
  endX = 0;
  endY = 0;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

 

  dragMoved(e, action) {
    // record new position
    this.endX = e.pointerPosition.x;
    this.endY = e.pointerPosition.y;
    console.log(this.endX);

   // this.renderer.setStyle(e.source.element.nativeElement, 'display', 'block');
   // this.renderer.setStyle(e.source.element.nativeElement, 'display', 'block');
   const classe = this.renderer.addClass(e.source.element.nativeElement, 'aa');
    //this.renderer.setStyle(e.source.element.nativeElement, 'background-color', 'green');
    // logic to set startX and startY
    // TRYING TO CHANGE CARD BORDER COLOR IF this.endX - this.startX > some number
}

}
