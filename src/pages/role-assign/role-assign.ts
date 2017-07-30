import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashBoardPage } from '../dashboard/dashboard';

@Component({
  selector: 'role-assign',
  templateUrl: 'role-assign.html'
})
export class RoleAssignPage {
  role = "SPY";
  constructor(public navCtrl: NavController) {

  }

  start(){
    this.navCtrl.push(DashBoardPage);
  }

}
