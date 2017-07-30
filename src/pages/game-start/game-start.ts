import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoleAssignPage } from '../role-assign/role-assign';

@Component({
  selector: 'game-start',
  templateUrl: 'game-start.html'
})
export class GameStartPage {
  private playerList = ['Player 1' , 'Player 2', 'Player 3'];

  constructor(public navCtrl: NavController) {

  }

  start(){
    this.navCtrl.push(RoleAssignPage);
  }

  isOrganizer(){
    return true;
  }

  enoughPlayers(){
    return true;
  }
}
