import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SponsorComponent } from "../sponsor-component/sponsor-component";

@Component({
  selector: 'app-timeout-component',
  imports: [RouterLink, SponsorComponent],
  templateUrl: './timeout-component.html',
  styleUrl: './timeout-component.css',
})
export class TimeoutComponent {}
