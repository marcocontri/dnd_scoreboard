import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TabelloneService } from '../../services/tabellone-service';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  imports: [RouterLink],
})
export class HomeComponent {

  private tabelloneService = inject(TabelloneService)

  homeScore = this.tabelloneService.homeScore
  homeFouls = this.tabelloneService.homeFouls
  get homeSquadName() { 
    return this.tabelloneService.homeSquadName()
  }

  get isEditing() {
    return this.tabelloneService.isEditing()
  }

  incrementHomeScore() { this.tabelloneService.incrementHomeScore() }
  decrementHomeScore() { this.tabelloneService.decrementHomeScore() }
  incrementHomeFouls() { this.tabelloneService.incrementHomeFouls() }
  decrementHomeFouls() { this.tabelloneService.decrementHomeFouls() }
  modifyHomeName() { this.tabelloneService.isEditing.set(true) }
  saveNameSquad(newName: string) {
    if (newName.trim())
      this.tabelloneService.homeSquadName.set(newName)
    this.tabelloneService.isEditing.set(false)
  }
  resetHome() { this.tabelloneService.resetHome()}
}
