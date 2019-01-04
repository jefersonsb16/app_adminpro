import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustesService: SettingsService ) {
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( color: string, link: any ) {
    console.log(color);
    this.aplicarCheck(link);
    this.ajustesService.aplicarTema(color);
  }

  aplicarCheck( link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustesService.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
