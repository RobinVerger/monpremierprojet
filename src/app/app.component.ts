import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Promo La Poste 2';
  description = 'Bonjour, il fait beau!';
  couleur = 'red';
  user = {
    name : 'Patrick',
    age : '42',
    birthday: new Date('1976/01/02')
  };

  getDescription() {
    return this.description.toUpperCase();
  }

  changeTitle() {
    if (this.title === 'Promo La Poste 2') {
      this.title = 'Promo La Poste 67';
    } else {
      this.title = 'Promo La Poste 2';
    }
  }
  changeColor() {
    if (this.couleur === 'red') {
      this.couleur = 'blue';
    } else {
      this.couleur = 'red';
    }
  }
  logValeur($event) {
    console.log($event.target.value);
  }
  changeCouleur($event) {
    this.couleur = $event.target.value;
  }
  logCheckbox($event) {
  }
}
