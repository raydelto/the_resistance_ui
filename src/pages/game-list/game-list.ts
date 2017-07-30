import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameStartPage } from '../game-start/game-start';
@Component({
  selector: 'game-list',
  templateUrl: 'game-list.html'
})
export class GameListPage {
  private gameList = ['Game 1', 'Game 2', 'Game 3'];
  constructor(public navCtrl: NavController) {

  }

  gotoGame() {
    this.navCtrl.push(GameStartPage);
  }

}
