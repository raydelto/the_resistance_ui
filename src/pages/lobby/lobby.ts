import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateGamePage } from '../create-game/create-game';

@Component({
  selector: 'lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {
  constructor(public navCtrl: NavController) {

  }

  createGame(){
    this.navCtrl.push(CreateGamePage);
  }
}
