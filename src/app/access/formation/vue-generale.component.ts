import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-vue-generale',
  templateUrl: './vue-generale.component.html',
  styleUrls: ['./vue-generale.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '97vh',
        backgroundColor: 'rgba(243, 226, 226, .5)',
        position: 'absolute',
        bottom: 0,
        width: '100vw'
      })),
      state('closed', style({
        height: '5vh',
        backgroundColor: 'rgba(243, 226, 226,.7)',
        position: 'absolute',
        bottom: 0,
        width: '100vw'
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('.8s')
      ])
    ])
  ]

})
export class VueGeneraleComponent implements OnInit {
  slideOuvert: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  slideDown() {
    this.slideOuvert = ! this.slideOuvert
  }

}
