import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  affiliation: number;
  specialEmployee: boolean;
  bonus: string;

  constructor() {
   this.bonus = "Please click on Calculate!";
  }

  calculateBonus(): string {

    var affiliationInYears = this.affiliation;
    var specialEmployee = this.specialEmployee;

    if (affiliationInYears > 75) {
        return "Affiliation must be under 76!";
    }

    var temp: number = 0;

    if (affiliationInYears < 2) {
        temp = 0;
    } else if (affiliationInYears > 2 && affiliationInYears <= 4) {
        temp = 50;
    } else if (affiliationInYears > 4 && affiliationInYears <= 10) {
        temp = 80;
    } else if (affiliationInYears > 10) {
        temp = 120;
    }

    if (specialEmployee) {
        temp = temp * 2;
    }

      console.log(temp);

      if (temp > 0) {
        this.bonus = temp + "%";
    } else {
        this.bonus = "kein Bonus";
    }
     
}
  
}
