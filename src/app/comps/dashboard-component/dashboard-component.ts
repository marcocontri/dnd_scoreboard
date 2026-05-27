import { Component } from '@angular/core';
import { HomeComponent } from "../home-component/home-component";
import { VisitorComponent } from "../visitor-component/visitor-component";

@Component({
  selector: 'app-dashboard-component',
  imports: [HomeComponent, VisitorComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {}
