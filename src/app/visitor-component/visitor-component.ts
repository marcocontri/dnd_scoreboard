import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-visitor-component',
  imports: [],
  templateUrl: './visitor-component.html',
  styleUrl: './visitor-component.css',
})
export class VisitorComponent {

  visitorScore = signal(0)
  visitorFouls = signal(0)
  visitorSquadName: string
  isEditing: boolean

  constructor() {
    this.visitorSquadName = "Ospiti"
    this.isEditing = false
  }
  incrementVisitorScore() {
    this.visitorScore.update(v => v + 1)
  }
  decrementVisitorScore() {
    if (!(this.visitorScore() === 0))
      // visitorScore non può essere < 0!
      this.visitorScore.update(v => v - 1)
  }
  incrementVisitorFouls() {
    if (!(this.visitorFouls() === 5))
      this.visitorFouls.update(v => v + 1)
  }
  decrementVisitorFouls() {
    if(this.visitorFouls() > 0){
      this.visitorFouls.update(v => v-1)
    }
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
    this.visitorScore.set(0)
    this.visitorFouls.set(0)
    this.visitorSquadName = "Ospiti"
  }

  showSponsor(){
    // se premuto manda ad una pagina che mostra gli sponsor per 1 minuto
  }
}
