import { Component } from '@angular/core';

@Component({
  selector: 'app-visitor-component',
  imports: [],
  templateUrl: './visitor-component.html',
  styleUrl: './visitor-component.css',
})
export class VisitorComponent {

  visitorScore: number
  visitorFouls: number
  visitorSquadName: string
  isEditing: boolean

  constructor() {
    this.visitorScore = 0
    this.visitorFouls = 0
    this.visitorSquadName = "Ospiti"
    this.isEditing = false
  }
  incrementVisitorScore() {
    this.visitorScore++
  }
  decrementVisitorScore() {
    if (!(this.visitorScore === 0))
      // visitorScore non può essere < 0!
      this.visitorScore--
  }
  incrementVisitorFouls() {
    if (!(this.visitorFouls === 6))
      this.visitorFouls++
  }
  modifyVisitorName() {
    this.isEditing = true
  }
  saveNameSquad(newName: string) {
    if (newName.trim())
      this.visitorSquadName = newName
    this.isEditing = false
  }
  resetVisitors() {
    this.visitorScore = 0
    this.visitorFouls = 0
    this.visitorSquadName = "Ospiti"
  }
}
