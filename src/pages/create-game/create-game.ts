import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameListPage } from '../game-list/game-list';

@Component({
  selector: 'create-game',
  templateUrl: 'create-game.html'
})
export class CreateGamePage {
  constructor(public navCtrl: NavController) {

  }

  create() {
    this.navCtrl.push(GameListPage);
  }

}
