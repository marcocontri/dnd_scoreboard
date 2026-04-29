import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  homeScore: number;

  constructor() {
    this.homeScore = 0
  }
  incrementHomeScore() {
    this.homeScore++
  }
  decrementHomeScore() {
    if (!(this.homeScore === 0))
      // controllo che punteggio NON < 0!
      this.homeScore--
  }
}
