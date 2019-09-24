import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('show', style({
        opacity:1
      })),
      state('hidden', style({
        display:'none ',
      })),
        /** Bouton switch */
      state('btnAfterSwitch', style({
        position: 'relative',
        top:'250px'
      })),
      state('btnBeforeSwitch', style({
        position: 'relative',
        top:'300px'
      })),

        /** Bouton Connexion */
        state('btnAfterConnexion', style({
          marginTop: '0px'
        })),
        state('btnBeforeConnexion', style({
         marginTop: '100px',
        })),


      /** Transition Switch */
         transition('btnBeforeSwitch => btnAfterSwitch', [
            animate('1s')
          ]),
          transition('btnAfterSwitch => btnBeforeSwitch', [
            animate('1s')
          ]),

          /** Transition connexion */

          transition('btnBeforeConnexion => btnAfterConnexion', [
            animate('1s')
          ]),
          transition('btnAfterConnexion => btnBeforeConnexion', [
            animate('1s')
          ]),

        transition('btnBefore => btnAfter', [
          animate('1s')
        ]),
        transition('btnAfter => btnBefore', [
          animate('1s')
        ]),
    ]),
  ]
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  open:boolean = false;
  show:boolean = false;
  type:string = 'password';
  constructor(private router:Router) { }

  ngOnInit() {
    console.log("show bool",this.show);
  }

  submitted(form){
   if(!form.valid){
      this.errorMessage = "Vérifier les données saisies"
   }else{
     this.router.navigate(['/access'])
   }

  }

  clickedButton(){
    this.open = true;
  }

  outside(){
    this.open = false;
  }

  showed(){
    this.show = !this.show
    if(this.show == true){
      this.type = 'text'
    }else{
      this.type = 'password'
    }

  }

}
