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
      })),

      state('openfiche', style({
        position:'relative',
        right:'0%'
      })),

      state('closefiche', style({
       position:'relative',
       right:'110%'
      })),

      transition('notespacepersonnel => espacepersonnel', [
        animate('.5s')
      ]),
      transition('espacepersonnel => notespacepersonnel', [
        animate('.5s')
      ]),
      transition('notespacecommun => espacecommun', [
        animate('.5s')
      ]),
      transition('espacecommun => notespacecommun', [
        animate('.5s')
      ]),

      transition('openscenario => closescenario', [
        animate('.7s')
      ]),
      transition('closescenario => openscenario', [
        animate('.7s')
      ]),

      transition('openfiche => closefiche', [
        animate('.7s')
      ]),
      transition('closefiche => openfiche', [
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
  openedition4:boolean = false;
  openedition5:boolean = false;

  next:boolean = false;

  scenarioopened:boolean = false;
  ficheopened:boolean = false;

  supprimer:boolean = false;
  copier:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  scenarioficheclosed(){
    this.scenarioopened = false;
    this.ficheopened = false;
  }

}
