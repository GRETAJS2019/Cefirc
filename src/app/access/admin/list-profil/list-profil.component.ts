import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  data = [
    { 'id':'001','nom':'Martin Choose' , 'mail':'MartinChoose@gmail.com','tel':'06.13.14.63.59' , 'spe':'Spécialisation'},
    { 'id':'002','nom':'Catherine Cadieux' , 'mail':'CatherineCadieux@jourrapide.com','tel':'01.46.08.03.01' , 'spe':'Spécialisation'},
    { 'id':'003','nom':'Coralie Durand' , 'mail':'CoralieDurand@armyspy.com','tel':'01.99.17.08.95' , 'spe':'Spécialisation'},
    { 'id':'004','nom':'Musette Bellemare' , 'mail':'MusetteBellemare@armyspy.com','tel':'02.67.86.82.46' , 'spe':'Spécialisation'},
    { 'id':'005','nom':'Bernadette Vernadeau' , 'mail':'BernadetteVernadeau@jourrapide.com','tel':'01.74.76.49.02' , 'spe':'Spécialisation'},
    { 'id':'006','nom':'Didier Nadeau' , 'mail':'DidierNadeau@rhyta.com','tel':'05.03.09.86.16' , 'spe':'Spécialisation'},
    { 'id':'007','nom':'Charlot Dubeau' , 'mail':'CharlotDubeau@armyspy.com','tel':'05.99.73.26.94' , 'spe':'Spécialisation'},
    { 'id':'008','nom':'Martin Choose' , 'mail':'MartinChoose@gmail.com','tel':'06.13.14.63.59' , 'spe':'Spécialisation'},
    { 'id':'009','nom':'Catherine Cadieux' , 'mail':'CatherineCadieux@jourrapide.com','tel':'01.46.08.03.01' , 'spe':'Spécialisation'},
    { 'id':'00A','nom':'Coralie Durand' , 'mail':'CoralieDurand@armyspy.com','tel':'01.99.17.08.95' , 'spe':'Spécialisation'},
    { 'id':'00B','nom':'Musette Bellemare' , 'mail':'MusetteBellemare@armyspy.com','tel':'02.67.86.82.46' , 'spe':'Spécialisation'},
    { 'id':'00C','nom':'Bernadette Vernadeau' , 'mail':'BernadetteVernadeau@jourrapide.com','tel':'01.74.76.49.02' , 'spe':'Spécialisation'},
    { 'id':'00D','nom':'Didier Nadeau' , 'mail':'DidierNadeau@rhyta.com','tel':'05.03.09.86.16' , 'spe':'Spécialisation'},
    { 'id':'00E','nom':'Charlot Dubeau' , 'mail':'CharlotDubeau@armyspy.com','tel':'05.99.73.26.94' , 'spe':'Spécialisation'},
    { 'id':'00F','nom':'Marsilius Bourque' , 'mail':'MarsiliusBourque@armyspy.com','tel':'04.10.18.22.26' , 'spe':'Spécialisation'}
]

  constructor() {
  }

  ngOnInit() {
    // Pose un delais pour pouvoir interagir avec les éléments créés par angular
    setTimeout(() => {
      this.eventCreate()     
    }, 100);
  }



  // Place les events sur la suppression et l'edition de ligne
  eventCreate(){
    let del = document.querySelectorAll('.deleteIcon')
    for (let i=0; i<del.length; i++){
      del[i].addEventListener('click', ()=>{
        console.log(del[i].id)
        this.deleteFormateur(del[i].id)
      })
    }
  }


  deleteFormateur(num){
    let modal = document.getElementById('delModal');
    let cancel =  document.querySelector('#delModalButtons div:first-child')
    let valid =  document.querySelector('#delModalButtons div:last-child')

    modal.style.display ='block'
    setTimeout(() => {
      modal.classList.add('popup')
    }, 100);

    cancel.addEventListener('click', ()=>{
      //modal.style.display ='none'

      modal.classList.remove('popup')
      setTimeout(() => {
        modal.style.display ='none'
      }, 100);
    })

    valid.addEventListener('click', ()=>{
      for (let line of this.data){
        if (line.id === num){
          let myline = this.data.indexOf(line)
          this.data.splice(myline,1)
          modal.classList.remove('popup')
         
          setTimeout(() => {
            modal.style.display ='none'
          }, 100);
        }
      }
    })
  }
}


