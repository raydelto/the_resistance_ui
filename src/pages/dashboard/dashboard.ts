import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashBoardPage {
  missions = [
  { number: 1, players: 2 , won: "RESISTANCE"},
  { number: 2, players: 3 , won: "SPIES"},
  { number: 3, players: 4 },
  { number: 4, players: 3 },
  { number: 5, players: 3 }
  ];
  spies = 2;
  players = 3;
  currentMission = 3;
  constructor(public navCtrl: NavController) {

  }

}

