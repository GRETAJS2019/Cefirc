import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  data = [
    { 'nom':'Martin Choose' , 'mail':'MartinChoose@gmail.com','tel':'06.13.14.63.59' , 'spe':'Spécialisation'},
    { 'nom':'Catherine Cadieux' , 'mail':'CatherineCadieux@jourrapide.com','tel':'01.46.08.03.01' , 'spe':'Spécialisation'},
    { 'nom':'Coralie Durand' , 'mail':'CoralieDurand@armyspy.com','tel':'01.99.17.08.95' , 'spe':'Spécialisation'},
    { 'nom':'Musette Bellemare' , 'mail':'MusetteBellemare@armyspy.com','tel':'02.67.86.82.46' , 'spe':'Spécialisation'},
    { 'nom':'Bernadette Vernadeau' , 'mail':'BernadetteVernadeau@jourrapide.com','tel':'01.74.76.49.02' , 'spe':'Spécialisation'},
    { 'nom':'Didier Nadeau' , 'mail':'DidierNadeau@rhyta.com','tel':'05.03.09.86.16' , 'spe':'Spécialisation'},
    { 'nom':'Charlot Dubeau' , 'mail':'CharlotDubeau@armyspy.com','tel':'05.99.73.26.94' , 'spe':'Spécialisation'},
    { 'nom':'Marsilius Bourque' , 'mail':'MarsiliusBourque@armyspy.com','tel':'04.10.18.22.26' , 'spe':'Spécialisation'}
]

  constructor() {
  }

  ngOnInit() {
  }
}
