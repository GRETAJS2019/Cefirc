import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css'],
  animations: [
    trigger('openClose', [

      state('espacepersonnel', style({
        flex: '0 0 50%',
        maxWidth: '50%'
      })),

      state('notespacepersonnel', style({
        flex: '0 0 25%',
        maxWidth: '25%'
      })),


      state('espacecommun', style({
        flex: '0 0 50%',
        maxWidth: '50%'
      })),

      state('notespacecommun', style({
        flex: '0 0 25%',
        maxWidth: '25%'
      })),


      state('closededition', style({
        opacity: 0
      })),

      state('openedition', style({
        opacity: 1
      })),

      state('openscenario', style({
        position:'relative',
        right:'0%'
      })),

      state('closescenario', style({
       position:'relative',
       right:'110%'
        //opacity: 0
      })),
      transition('notespacepersonnel => espacepersonnel', [
        animate('.7s')
      ]),
      transition('espacepersonnel => notespacepersonnel', [
        animate('.7s')
      ]),
      transition('notespacecommun => espacecommun', [
        animate('.7s')
      ]),
      transition('espacecommun => notespacecommun', [
        animate('.7s')
      ]),


      transition('openscenario => closescenario', [
        animate('.7s')
      ]),
      transition('closescenario => openscenario', [
        animate('.7s')
      ]),
      transition('openedition => closededition', [
        animate('.7s')
      ]),
      transition('closededition => openedition', [
        animate('.7s')
      ])
    ])
  ]

})

export class EditionComponent implements OnInit {
  espacecommun: boolean = false;
  openedition1: boolean = false;
  openedition2: boolean = false;
  openedition3: boolean = false;

  next:boolean = false;

  scenarioopened:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
