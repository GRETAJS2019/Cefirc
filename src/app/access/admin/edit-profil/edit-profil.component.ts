import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let modal = document.getElementById('modal')
    let annul = document.querySelector('#modal .ModalButtons #annuler')
    let confirm = document.querySelector('#modal .ModalButtons #confirmer')
    let box = document.getElementById('Administrateur') as HTMLInputElement;
    annul.addEventListener('click', function () {
      if (box.checked) {
        modal.classList.remove('popup')
        setTimeout(() => {
          box.checked = false;
          modal.style.display = 'none'
        }, 100);
      }

    })

    confirm.addEventListener("click", function () {
      if (box.checked) {
        modal.classList.remove('popup')
        setTimeout(() => {
          modal.style.display = 'none'
        }, 100);
      }
    })

    box.addEventListener('click', function () {
      if (box.checked) {
        modal.style.display = 'block'
        setTimeout(() => {
          modal.classList.add('popup')
        }, 100);
      }
    })

  }

}
