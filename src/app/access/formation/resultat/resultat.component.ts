import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
 
questions = [{ question:"Quel niveau est requis pour pouvoir signer les permis ?",
  reponse : [{ text: "Niveau 1",
               vrai: true },
             { text: "Niveau 2",
             vrai: false }]
 },{ question:"Quels sont les 4 principaux permis ou autorisations qui sont  susceptibles de vous être demandés ?",
 reponse : [{ text: "Permis électrique",
              vrai: true },
            { text: "Permis de sortir",
            vrai: false },
            { text: "Permis de fouille",
            vrai: false },
            { text: "Permis de consignation",
            vrai: false },
            { text: "Permis de travail",
            vrai: false },
            { text: "Permis de feu",
            vrai: false },
            { text: "Permis de fumer",
            vrai: false },
            { text: "Permis de pénétrer",
            vrai: false }]
 },{ question:"Pour des travaux de très courte durée (moins d’1 heure),peut-on travailler sans permis ou autorisation ?",
 reponse : [{ text: "Oui",
               vrai: true },
             { text: "Non",
             vrai: false }]
 },{ question:"Doit-on demander une autorisation d’accès ?",
 reponse : [{ text: "Pour le personnel.",
             vrai: true },
           { text: "Pour les véhicules et engins.",
           vrai: false },
           { text: "Pour les coffres, caisses à outils…",
           vrai: false },
           { text: "Pour un poste à souder ou groupe électrogène quelque soit le site",
           vrai: false }]
 },{ question:"Quelles sont vos obligations en tant qu’opérateur ?",
 reponse : [{ text: "Respecter les consignes de votre employeur.",
               vrai: true },
             { text: "Respecter les consignes de l’Entreprise Utilisatrice.",
             vrai: false },
             { text: "Faire vous-même les visites de conformité réglementaire du matériel mis à votre disposition.",
             vrai: false },
             { text: "Appliquer votre droit de retrait en cas de danger grave et imminent.",
             vrai: false },
             { text: "Acheter des EPI adaptés.",
             vrai: false },
             { text: "Prendre l’initiative de faire contrôler régulièrement son matériel par un organisme officiel.",
             vrai: false }]
 },{ question:"On m’a fourni la formation et les EPI nécessaires, dont le harnais complet, aucune protection collective ne pouvait être mise en place. Je ne m’accroche pas et tombe. Qui est le responsable ?",
 reponse : [{ text: "Mon responsable",
               vrai: true },
             { text: "Moi",
             vrai: false },
             { text: "Le responsable EU",
             vrai: false }]
 }]

  constructor() { }

  ngOnInit() {
  }

}
