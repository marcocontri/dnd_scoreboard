import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SponsorComponent } from "../sponsor-component/sponsor-component";
import { TabelloneService } from '../../services/tabellone/tabellone-service';
import { TimerService } from '../../services/timer/timer-service';

@Component({
  selector: 'app-timeout-component',
  imports: [RouterLink, SponsorComponent],
  templateUrl: './timeout-component.html',
  styleUrl: './timeout-component.css',
})
export class TimeoutComponent {
  private tabelloneService = inject(TabelloneService)
  private timerService = inject(TimerService)

  homeName = this.tabelloneService.homeSquadName
  homeScore = this.tabelloneService.homeScore
  homeFouls = this.tabelloneService.homeFouls
  
  visitorName = this.tabelloneService.visitorSquadName
  visitorScore = this.tabelloneService.visitorScore
  visitorFouls = this.tabelloneService.visitorFouls

  minLeft = this.timerService.minutes
  secLeft = this.timerService.seconds
  decLeft = this.timerService.decimals
}
