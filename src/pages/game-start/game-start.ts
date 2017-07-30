import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateGamePage } from '../create-game/create-game';

@Component({
  selector: 'game-start',
  templateUrl: 'game-start.html'
})
export class GameStartPage {
  private playerList = ['Player 1' , 'Player 2', 'Player 3'];

  constructor(public navCtrl: NavController) {

  }

  createGame(){
    this.navCtrl.push(CreateGamePage);
  }

  isOrganizer(){
    return true;
  }

  enoughPlayers(){
    return true;
  }
}
